# Jonaski Portfolio

An original, terminal-inspired cybersecurity portfolio built with Eleventy,
Nunjucks, semantic HTML, native CSS, vanilla JavaScript, Markdown, and JSON.

## Development

```bash
npm install
npm start
```

Eleventy serves the site at `http://localhost:8080/` by default.

## Production build

```bash
npm run check
```

The generated site is written to `_site/`.

GitHub Pages builds set `ELEVENTY_PATH_PREFIX=/jonaski-portfolio/` so generated
URLs work below the repository subdirectory. Local development keeps `/` as the
default path prefix.

## Content

- Site identity and contact details: `src/_data/site.json`
- Expertise: `src/_data/expertise.json`
- Projects: `src/_data/projects.json`
- Podcast: `src/_data/podcast.json`
- Research posts: `src/research/*.md`

Search for `TODO` before publishing. Placeholder links intentionally use empty
values so the site never sends visitors to fabricated profiles.
