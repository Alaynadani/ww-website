// Creates a Stripe Checkout session for a custom-amount gift certificate.
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const MIN_DOLLARS = 25;   // change to taste
const MAX_DOLLARS = 500;

const reply = (statusCode, obj) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(obj),
});
const clean = (v, max) => String(v || '').trim().slice(0, max);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return reply(405, { error: 'Method not allowed' });

  let b;
  try { b = JSON.parse(event.body || '{}'); } catch { return reply(400, { error: 'Bad request' }); }

  // The amount is validated here on the server; never trust the browser.
  const dollars = Math.round(Number(b.amount));
  if (!Number.isFinite(dollars) || dollars < MIN_DOLLARS || dollars > MAX_DOLLARS) {
    return reply(400, { error: `Amount must be between $${MIN_DOLLARS} and $${MAX_DOLLARS}.` });
  }

  const recipientEmail = clean(b.recipientEmail, 200);
  if (recipientEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail)) {
    return reply(400, { error: 'Recipient email looks invalid.' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: dollars * 100,
          product_data: { name: `Gift Certificate ($${dollars})` },
        },
      }],
      metadata: {
        recipient_name: clean(b.recipientName, 100),
        recipient_email: recipientEmail,
        message: clean(b.message, 300),
      },
      success_url: `${process.env.SITE_URL}/gift-certificates.html?success=1`,
      cancel_url: `${process.env.SITE_URL}/gift-certificates.html`,
    });
    return reply(200, { url: session.url });
  } catch (err) {
    console.error(err);
    return reply(500, { error: 'Could not start checkout. Please try again.' });
  }
};
