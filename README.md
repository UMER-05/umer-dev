# Muhammed Umer — Portfolio

Personal portfolio of Muhammed Umer, a full stack developer building SaaS platforms, CRMs and web apps.

Live site: https://iamumer.vercel.app/

## Tech

- React 19 and Vite
- Plain CSS (no UI framework), in `src/App.css` and `src/index.css`
- Hosted on Vercel; caching and security headers live in `vercel.json`

## Run locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # check code with ESLint
```

## Editing content

All page content lives near the top of `src/App.jsx`:

- `projects`: project cards. Set `category` to `'app'` or `'website'` for the filters. Add `gallery` for an auto-sliding image set, and leave out `link` to hide the Visit button.
- `testimonials`: client reviews. Only add reviews clients actually wrote.
- `highlights`, `heroFacts`, `processSteps`, `expertise`: stats, quick facts, process steps and skills.

Images go in `src/assests/` as WebP, about 1400px wide.

## Before each deploy

1. Update `<lastmod>` in `public/sitemap.xml` to the deploy date.
2. Run `npm run lint` and `npm run build`.
