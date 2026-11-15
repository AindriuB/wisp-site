# Wisp website

Static landing page and getting-started guide for [Wisp](https://github.com/AindriuB/wisp). Uses the app's icon and light/dark palette. No build step or package installation.

## Preview locally

Run `python3 -m http.server 4173` from this folder and open http://localhost:4173.

## GitHub Pages

In this repository's **Settings → Pages**, set **Source** to **GitHub Actions**. Push to `main` or run the **Deploy GitHub Pages** workflow manually. It publishes only the HTML, CSS, JavaScript and assets, with relative URLs that work under `/wisp-site/` or a custom domain.

The expected project URL is https://aindriub.github.io/wisp-site/ once Pages is enabled and deployment succeeds.

## Content

- `index.html`: landing page, illustrative app demo, feature overview, agent roadmap, release links.
- `guide.html`: installation and workflow guide with copyable TOML examples.
- `styles.css`: responsive styles and app-derived light/dark palettes.
- `script.js`: theme switcher, accessible demo tabs, simulated send, copy buttons.

Download buttons open the latest release page rather than pinning to a version. Agent features are labelled as development direction. Check product copy against the app README and roadmap when releases change. The app demo runs locally and sends no network requests. All fonts and assets are served locally.
