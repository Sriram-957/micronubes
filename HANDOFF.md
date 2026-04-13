# Client handoff — Micronubes consulting site

## What you have

- **Pages:** Home, Services, About, Contact, Privacy (footer on all pages).
- **Styling:** [css/main.css](css/main.css) — calm consulting aesthetic, responsive nav, focus states.
- **Config:** [js/site-config.js](js/site-config.js) — company name in HTML still must be find-replaced; config drives email, LinkedIn, form URL, optional Plausible analytics.
- **Intake checklist:** [content/CLIENT-INTAKE.md](content/CLIENT-INTAKE.md).

## Before launch

1. **Domain:** Replace `https://micronubes.example` in every HTML file, `robots.txt`, and `sitemap.xml` (search in editor).
2. **Form:** Create a [Formspree](https://formspree.io) form (or use your host’s form); set `formAction` in `site-config.js`. Test submit and spam protection.
3. **Email / LinkedIn:** Confirm `email` and `linkedin` in `site-config.js`.
4. **Privacy:** Have counsel review [privacy/index.html](privacy/index.html).
5. **Open Graph:** Many networks expect absolute URLs (already templated). If previews break, add a 1200×630 PNG and point `og:image` / `twitter:image` to it.
6. **Favicon:** Replace [assets/favicon.svg](assets/favicon.svg) if the client supplies a mark.

## Editing content without code

- **If you stay on this static site:** Edit HTML in each page or teach the client basic HTML — or later migrate to a CMS.
- **If the client uses Webflow/WP:** See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Optional analytics

Set `plausibleDomain` in `site-config.js` to your domain (e.g. `yoursite.com`) for Plausible. For Google Analytics 4, add the gtag snippet to each page `<head>` per Google’s instructions and update the privacy policy accordingly.
