// Stripe calls this after a successful payment. It creates the code, saves it, and emails it.
const Stripe = require('stripe');
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O/1/I confusion
function makeCode() {
  let s = '';
  for (let i = 0; i < 12; i++) s += ALPHABET[crypto.randomInt(ALPHABET.length)];
  return `${s.slice(0, 4)}-${s.slice(4, 8)}-${s.slice(8, 12)}`;
}
const esc = (t) => String(t || '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

exports.handler = async (event) => {
  const raw = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString('utf8') : event.body;
  let evt;
  try {
    evt = stripe.webhooks.constructEvent(raw, event.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return { statusCode: 400, body: 'Invalid signature' };
  }

  if (evt.type !== 'checkout.session.completed') return { statusCode: 200, body: 'ignored' };
  const s = evt.data.object;
  if (s.payment_status !== 'paid') return { statusCode: 200, body: 'not paid' };

  // Stripe can send the same event twice; don't create two certificates.
  const { data: existing } = await supabase
    .from('gift_certificates').select('code').eq('stripe_session_id', s.id).maybeSingle();
  if (existing) return { statusCode: 200, body: 'duplicate' };

  const m = s.metadata || {};
  const purchaserEmail = s.customer_details && s.customer_details.email;
  const code = makeCode();

  const { error } = await supabase.from('gift_certificates').insert({
    code,
    amount_cents: s.amount_total,
    recipient_name: m.recipient_name || null,
    recipient_email: m.recipient_email || null,
    purchaser_email: purchaserEmail || null,
    message: m.message || null,
    stripe_session_id: s.id,
  });
  if (error) {
    console.error(error);
    return { statusCode: 500, body: 'db error' }; // Stripe will retry
  }

  const amount = (s.amount_total / 100).toFixed(2);
  const to = m.recipient_email || purchaserEmail;
  const html = `
    <h2>${m.recipient_name ? `Hi ${esc(m.recipient_name)}, you` : 'You'}'ve received a gift certificate!</h2>
    ${m.message ? `<p><em>"${esc(m.message)}"</em></p>` : ''}
    <p>Value: <strong>$${amount}</strong></p>
    <p>Your code: <strong style="font-size:1.4em;letter-spacing:2px">${code}</strong></p>
    <p>Mention this code when you book, or bring it to your appointment. It can be used once.</p>`;

  try {
    const { error: emailError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [to],
      bcc: [process.env.BUSINESS_EMAIL],
      subject: `Your $${amount} gift certificate`,
      html,
    });
    if (emailError) throw emailError;
  } catch (e) {
    // The certificate is saved; the owner can look it up in Supabase if email fails.
    console.error('Email failed', e);
  }
  return { statusCode: 200, body: 'ok' };
};
