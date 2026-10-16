# varundey.me

Personal site of Varun Dey: a short intro, a blog, projects and talks. Built with [Astro](https://astro.build) and deployed to GitHub Pages at <https://varundey.me>.

## Develop

Requires Node 22.12+ (`.nvmrc` pins 24).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site into dist/
npm run preview  # serve dist/ locally
```

## Project layout

```
src/
  content/
    posts/<slug>/index.md      # blog posts   -> /blog/<slug>/
    projects/<slug>/index.md   # projects     -> /projects/<slug>/
    talks/<slug>/index.md      # talks        -> /talks/<slug>/
  content.config.ts            # frontmatter schema for the three collections
  layouts/Layout.astro         # page shell, <head> meta, nav
  pages/                       # index.md (home), 404.md, list pages, [slug] pages
  styles/global.css
static/                        # copied as-is to the site root (favicons, CNAME, .nojekyll, slides)
```

### Adding content

Create `src/content/<collection>/<slug>/index.md`. The folder name becomes the URL.

| Collection | Frontmatter |
|---|---|
| posts | `title`, `date` (`YYYY-MM-DD`), `excerpt`, `publish` |
| projects | `title`, `date`, `lede`, `link`, `repo`, `lang`, `publish` |
| talks | `title`, `date`, `venue`, `excerpt`, `publish` |

Entries with `publish: false` are left out of the build. Lists are sorted by `date`, newest first; ties fall back to the slug.

The home page text lives in `src/pages/index.md`.

## Deploy

Merging to `develop` deploys. `.github/workflows/deploy.yml` builds the site and publishes `dist/` with GitHub Pages' Actions deployment. Pull requests only run the build.

- Pages source must be set to **GitHub Actions** (Settings -> Pages).
- `static/CNAME` keeps the custom domain, and `static/.nojekyll` stops Pages from dropping the `_astro/` assets folder.
- DNS is on Cloudflare, pointing at GitHub Pages.

## License

[MIT](LICENSE)
