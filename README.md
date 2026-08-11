# xiaoxiaoshikui.github.io

Yunxiang Guo's personal website, built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.16.3).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. GitHub Pages should be configured to serve from `gh-pages` (Settings → Pages → Build and deployment → Branch: `gh-pages`).

## Content

- `_pages/about.md` — home page bio, profile, and news feed
- `_data/cv.yml` — CV content (education, experience, talks, service, skills)
- `_bibliography/papers.bib` — publications
- `_news/` — short activity updates shown on the home page and `/news/`
- `_data/socials.yml` — social/contact links
