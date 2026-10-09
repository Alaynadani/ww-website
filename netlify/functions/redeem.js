// Password-protected: check a code, or mark it redeemed (one time only).
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const reply = (statusCode, obj) => ({
  statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obj),
});
const sha = (x) => crypto.createHash('sha256').update(String(x)).digest();

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return reply(405, { error: 'Method not allowed' });
  let b;
  try { b = JSON.parse(event.body || '{}'); } catch { return reply(400, { error: 'Bad request' }); }

  if (!crypto.timingSafeEqual(sha(b.password), sha(process.env.ADMIN_PASSWORD))) {
    return reply(401, { error: 'Wrong password.' });
  }

  const code = String(b.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
    .replace(/(.{4})(.{4})(.{4})/, '$1-$2-$3');

  if (b.action === 'redeem') {
    // Single atomic update: only succeeds if the code is still unredeemed.
    const { data, error } = await supabase.from('gift_certificates')
      .update({ redeemed: true, redeemed_at: new Date().toISOString() })
      .eq('code', code).eq('redeemed', false).select('amount_cents');
    if (error) return reply(500, { error: 'Database error.' });
    if (data && data.length) return reply(200, { status: 'redeemed', amount: data[0].amount_cents / 100 });
  }

  const { data: row } = await supabase.from('gift_certificates')
    .select('amount_cents, redeemed, redeemed_at').eq('code', code).maybeSingle();
  if (!row) return reply(200, { status: 'not_found' });
  return reply(200, {
    status: row.redeemed ? 'already_redeemed' : 'valid',
    amount: row.amount_cents / 100,
    redeemed_at: row.redeemed_at,
  });
};
