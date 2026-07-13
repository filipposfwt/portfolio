# Portfolio

A custom Hugo site for a designer/illustrator portfolio, deployed to GitHub Pages.

## Local development

```bash
hugo server -D        # http://localhost:1313, live reload, shows drafts
```

## Structure

- `config/_default/hugo.toml` — site settings, author info, social links, menu
- `content/` — the words: `_index.md` (home), `about.md`, `contact.md`, and
  `projects/<name>/index.md` for each case study
- `layouts/` — the HTML templates (fully custom, no theme)
- `assets/css/main.css` — all styling (edit `--accent` etc. at the top for colors)

## Adding a project

1. Make a folder: `content/projects/my-project/`
2. Add `index.md` with front matter (`title`, `category`, `year`, `summary`, `weight`)
3. Drop `cover.jpg` in that folder for the thumbnail + page hero
4. Drop more images in `content/projects/my-project/images/` — they auto-fill the gallery

## Moving to a custom domain later

1. Buy the domain and point DNS at GitHub (four `A` records, or a `CNAME` for `www`).
2. Add the domain in the repo's **Settings → Pages → Custom domain**.
3. Create `static/CNAME` containing just the domain, e.g. `janedoe.com`.
4. Change `baseURL` in `config/_default/hugo.toml` to `https://janedoe.com/`.

Nothing in the content or templates hardcodes the `/portfolio/` subpath, so links
won't break.
