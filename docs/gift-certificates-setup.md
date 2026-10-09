# Gift certificate setup (all free tiers)

Stripe only charges per sale (about 2.9% + 30¢). Everything else below is free.

## 1. Database (Supabase)
1. Create a free project at supabase.com.
2. SQL Editor: paste and run `supabase/schema.sql` from this repository.
3. Project Settings > API: copy the **Project URL** and the **service_role** key (keep it secret).
Note: free Supabase projects pause after about a week with no activity. If sales are rare, open the dashboard now and then, or restore the project if it pauses.

## 2. Payments (Stripe)
1. Copy your **Secret key** (use test mode first).
2. After deploying, Developers > Webhooks > Add endpoint:
   `https://YOUR-SITE.netlify.app/.netlify/functions/stripe-webhook`, event `checkout.session.completed`.
3. Copy that endpoint's **Signing secret**.

## 3. Email (Resend)
Create a free account, add and verify the business's domain, and create an API key.
`FROM_EMAIL` must use that domain, e.g. `Studio Name <gifts@yourdomain.com>`.

## 4. Deploy (Netlify)
Commit the project to GitHub and connect the repository root to Netlify. The root `netlify.toml` publishes `site/` and deploys functions from `netlify/functions/`; `package.json` contains the required dependencies. Netlify installs them during deployment.

For local development, copy `.env.example` to `.env`, fill in test credentials, then run `npm run dev`. Never commit `.env`.

In Netlify Site configuration > Environment variables, add:

| Name | Value |
|---|---|
| STRIPE_SECRET_KEY | sk_test_... |
| STRIPE_WEBHOOK_SECRET | whsec_... |
| SUPABASE_URL | your project URL |
| SUPABASE_SERVICE_KEY | service_role key |
| RESEND_API_KEY | re_... |
| FROM_EMAIL | Studio <gifts@yourdomain.com> |
| BUSINESS_EMAIL | where she wants a copy of every certificate |
| ADMIN_PASSWORD | a long, unique password |
| SITE_URL | https://yoursite.com (no trailing slash) |

## 5. Test
Open the Netlify deploy preview and visit `/gift-certificates.html`. Buy with test card `4242 4242 4242 4242` (any future date, any CVC). Confirm the email arrives, then use `/admin.html` to check and redeem the code. Redeem it twice to confirm the second attempt is refused. Switch to live Stripe keys only after the test flow works end to end.

## Notes
- Amount limits ($25 to $500) are set at the top of `netlify/functions/create-checkout.js`.
- Public pages are in `site/`; serverless handlers are in `netlify/functions/`.
- Check your state's gift certificate rules (expiration, unclaimed property) and ask an accountant how to book unredeemed certificates.
