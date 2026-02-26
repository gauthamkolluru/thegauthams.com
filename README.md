# thegauthams.com

Hugo static site for thegauthams.com with a custom Apple-style theme. Content was migrated from [gauthamskme](https://github.com/gauthamkolluru/gauthamskme); this repo is the canonical source once Netlify is pointed here. The [gauthamskme](https://github.com/gauthamkolluru/gauthamskme) repo is planned to be archived after the switch.

## Local development

- Install [Hugo](https://gohugo.io/installation/) (extended recommended).
- From the repo root, run:
  ```bash
  hugo server
  ```
- Open http://localhost:1313. Content changes live-reload.

To create a new post:

```bash
hugo new posts/your-post.md
```

Edit the new file in `content/posts/`, set `draft: false` when ready to publish.

## Build & deploy (Netlify)

- **Build command:** `hugo --gc --minify`
- **Publish directory:** `public`
- **Hugo version:** Set in `netlify.toml`; all Netlify contexts use the same [latest stable Hugo](https://github.com/gohugoio/hugo/releases) (e.g. `HUGO_VERSION = "0.157.0"`). Update this when upgrading Hugo.

## Structure

- `config.toml` — Site config, menu (Posts, Tags, Resume, About), baseURL.
- `content/` — Markdown content: `about.md`, `posts/*.md`.
- `themes/applelike/` — Custom theme (layouts, `static/css/main.css`, optional `static/js/main.js`).
- `archetypes/default.md` — Default front matter for new content.

## Theme / fonts

The site uses **Nunito** (Google Fonts) as the main font (Option A: single friendly font). Fonts you may want to try later are documented here:

- **Nunito** — Rounded, friendly, readable (current).
- **Quicksand** — Geometric, soft, a bit playful.
- **Fredoka** — More playful; good for headings if you switch to a two-font setup.

To change the font: update the Google Fonts link in `themes/applelike/layouts/partials/head.html` and the `--font-sans` (and optionally `--font-heading`) variable in `themes/applelike/static/css/main.css`.

## License

See [LICENSE](LICENSE).
