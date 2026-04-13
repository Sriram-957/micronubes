# Deployment and platform notes

## Static site (this folder)

This implementation is a **dependency-free static site**: open `index.html` via a local static server (recommended) or deploy the whole folder to **Netlify**, **Cloudflare Pages**, **GitHub Pages**, **Azure Static Web Apps**, or **S3 + CloudFront**.

1. Replace every `https://micronubes.example` URL with your real domain in all `*.html`, `robots.txt`, and `sitemap.xml`.
2. Update [js/site-config.js](../js/site-config.js): email, LinkedIn, `formAction` (Formspree or host form), and optionally `plausibleDomain`.
3. Export **PNG** `og-image.png` (1200×630) from the SVG if LinkedIn/Facebook previews require raster images — then update `og:image` and `twitter:image` paths in each HTML `<head>`.
4. Point your DNS to the host; enable HTTPS (default on most hosts).
5. Submit `sitemap.xml` in Google Search Console after go-live.

**Local preview:** from this directory run `npx serve .` or use VS Code “Live Server” so asset paths resolve correctly.

## Webflow or WordPress (client-editable alternative)

If the client will maintain copy in **Webflow** or **WordPress**, treat this repo as a **reference**: information architecture, page structure, and messaging can be recreated in the builder. Webflow suits custom layout; WordPress suits teams already comfortable with WP.

- Recreate pages: Home, Services, About, Contact, Privacy.
- Reconnect the contact form to Webflow forms, WP plugin, or Formspree.
- Match or replace placeholder branding (`Micronubes Consulting`) everywhere.

You do not need this static folder in production if the live site is entirely on Webflow/WP — keep the repo for versioned copy and assets if useful.
