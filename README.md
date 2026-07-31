# AI Income Academy — Sales Landing Page

A single-page, high-converting sales page for **AI Income Academy**, a digital bundle sold on Gumroad. This page is presentation only — every "Buy Now" / "Get Instant Access" button links out to Gumroad, which handles checkout, payment, receipts, and file delivery.

**Gumroad product:** https://henryinnyc.gumroad.com/l/ai-income-academy

Built with plain HTML5, CSS3, and vanilla JavaScript. No React, no Node.js, no backend, no build step — just static files.

## Folder structure

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── favicon-32.png
    ├── favicon-192.png
    ├── favicon.png       (apple-touch-icon)
    ├── logo-nav.png       (header/footer logo)
    └── og-cover.jpg       (social share preview image)
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all files in this folder, **keeping the folder structure intact** (the `images/` folder must stay next to `index.html`).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a live URL like `https://yourusername.github.io/repo-name/` within a minute or two.
6. (Optional) Add a custom domain under Settings → Pages → Custom domain.

No other setup is required — there's nothing to install and nothing to configure.

## Things you'll likely want to edit

- **`index.html`**
  - Testimonials are placeholders — look for `<!-- data-editable: testimonial -->` comments and swap in real customer quotes, names, and roles.
  - The canonical URL, Open Graph URL, and structured data (`JSON-LD` block near the top of `<head>`) currently point to a placeholder GitHub Pages URL — update these once you know your live URL.
  - Footer "Privacy Policy," "Terms of Service," and "Contact" links currently point to `#` — link these to real pages once you have them.
- **`images/og-cover.jpg`** — the image shown when this page is shared on Facebook/Twitter/iMessage. Swap this out for a custom 1200×630 promotional graphic if you want something more eye-catching than the current logo-on-navy placeholder.
- **Colors/fonts** — all design tokens (colors, radii, shadows) are defined as CSS custom properties at the top of `style.css` under `:root`, so palette or spacing tweaks can be made in one place.

## Notes

- Every "Buy Now" and "Get Instant Access" button links directly to your Gumroad checkout URL. There is no cart or checkout logic on this page by design.
- The FAQ accordion, mobile nav, scroll-reveal animations, and back-to-top button are all handled in `script.js` with no external libraries.
- The page respects `prefers-reduced-motion` — animations are disabled automatically for visitors who have that OS setting turned on.
- Images use native lazy-loading where supported.
