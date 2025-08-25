# Simone Caminati – Portfolio (React + Tailwind)

A fast, modern, **static portfolio** generated from the CV and built with **React + Tailwind CSS** (Vite).

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Structure

- `src/data/profile.js`: all your content. Edit this file to change text, links, skills or add projects.
- `src/components/*`: UI building blocks.
- `src/App.jsx`: assembles sections.
- Tailwind is configured with `darkMode: 'class'` and a minimal design system (badges, cards, etc.).

## Customization tips

- Replace colors or radii in `tailwind.config.js` and utility classes.
- Add your photo (e.g., `/public/me.jpg`) and render it in `Hero.jsx`.
- Add analytics or a contact form provider (Formspree, Netlify Forms) if needed.

## Deploy

- **Vercel**: Import the repo, framework = Vite. Default build command `npm run build` and output `dist`.
- **Netlify**: Build `npm run build`, publish directory `dist`.
- **GitHub Pages**: `npm run build` then push `dist` to `gh-pages` branch or use an action.

> Note: Review dates imported from the CV for typos (e.g., education start year).
