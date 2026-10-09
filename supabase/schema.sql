create table gift_certificates (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  amount_cents integer not null,
  recipient_name text,
  recipient_email text,
  purchaser_email text,
  message text,
  stripe_session_id text unique,
  redeemed boolean not null default false,
  redeemed_at timestamptz,
  created_at timestamptz not null default now()
);
-- Row level security on with no policies: only the server (service key) can read or write.
alter table gift_certificates enable row level security;
