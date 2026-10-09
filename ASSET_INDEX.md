# Warm Modern Website Redesign assets

Project ID: `862020210241171021`

## Stitch export

All five requested screens are exported under `stitch_warm_modern_website_redesign/`:

- `image_from_https_alaynadani.github.io_ww_practice_logo.png/screen.png` - logo image screen (`1b96afa9fefe4164a6904fe43ecf1cad`).
- `wildflower_wellness_modern_sanctuary_redesign/screen.png` - Modern Sanctuary Redesign (`376c25f9365845c987a88c593463eed3`).
- `wildflower_wellness_modern_sanctuary_redesign/code.html` - its exported HTML code.
- `wildflower_wellness_desktop_sanctuary_experience/screen.png` - Desktop Sanctuary Experience (`3b1ce1154dfd4b6ea3f7d447bd54bcfe`).
- `wildflower_wellness_desktop_sanctuary_experience/code.html` - its exported HTML code.
- `extracted_text_from_https_alaynadani.github.io_ww_practice.md` - extracted text (`517920cf31e64635937e8d9d8ab01b42`).
- `artisanal_sanctuary/DESIGN.md` - Design System (`asset-stub-assets_98df9d59adb74cf7a4df19ed754de114`).

## Deployment entry

Netlify publishes `site/`, where `index.html`, `gift-certificates.html`, and `admin.html` are the public pages. Netlify Functions are in `netlify/functions/`; the root `index.html` redirects local previews to `site/`. The former Stitch page snapshot is preserved as `local-stitch-preview.html`, and the earlier published page as `published-reference.html`.

The hosted-site reference stylesheet remains at root as `style.css`. Public images are in `site/` and `site/assets/`. Netlify configuration and dependencies live in root `netlify.toml` and `package.json`.
