# Client intake checklist

Replace placeholder content sitewide once you have final answers from the client. Search the codebase for `REPLACE_` or edit the HTML partials in each page’s `<main>` and the site config in `js/site-config.js`.

## Required

- [ ] **Legal entity name** (footer copyright)
- [ ] **Brand / display name** (logo text if no image logo yet)
- [ ] **Logo** (SVG/PNG) — drop into `assets/logo.svg` and update header
- [ ] **Positioning** (2–3 sentences: who you help, with what outcome)
- [ ] **Services list** (names + one line each; expand on Services page)
- [ ] **Proof points** (years, certifications, industries — only what may be published)
- [ ] **Contact email** and **LinkedIn** URL
- [ ] **Form endpoint** — [Formspree](https://formspree.io) or host-native form; set `formAction` in `js/site-config.js`
- [ ] **Privacy policy** — have counsel review `privacy/index.html` for your jurisdiction

## Optional v1

- [ ] Client logos for “Trusted by” (with permission)
- [ ] Team photo or approved stock imagery
- [ ] Google Analytics / Plausible snippet (add in `js/site-config.js` if used)
- [ ] Physical address for Google Business Profile (off-site)

## Placeholders used in this build

| Field | Placeholder |
|-------|-------------|
| Company | Micronubes Consulting |
| Tagline | Data and analytics that drive decisions |
| Email | hello@micronubes.example |
| Form | Configure Formspree `formAction` in `site-config.js` |
