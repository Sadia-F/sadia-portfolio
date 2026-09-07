# Sadia Ferdous — Portfolio

My personal portfolio website — a fast, serverless static site built with **Next.js**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, deployed to GitHub Pages.

Live: [https://sadia-f.github.io/sadia-portfolio](https://sadia-f.github.io/sadia-portfolio)

---

## Tech Stack

- **Framework:** Next.js (App Router) with static export
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (class-based dark mode)
- **Animation:** Framer Motion
- **Interactive extras:** Typewriter effect, command palette, AI portfolio chatbot

## Sections

- Hero with live GitHub stats
- Now (what I'm currently working on)
- About & highlights
- Experience & featured projects
- Projects with live-demo + GitHub links
- Testimonials (impact cards + a visitor testimonial form)
- Tech stack & skills
- Education, leadership, timeline
- Photography
- AI chatbot that answers questions from the portfolio
- Connect / contact

## Features

- 🌙 Light/dark mode with OS preference detection
- ⌘K / Ctrl+K command palette for keyboard navigation
- 💬 Portfolio Q&A chatbot (`app/lib/chatEngine.ts`) that answers any question from the site's data
- 💌 Testimonial form that delivers submissions via FormSubmit (mail to `sadiaferdous003@gmail.com`)
- 📈 Plausible analytics (ready to configure)
- 🔍 SEO metadata, Open Graph, JSON-LD person schema, sitemap, robots.txt

## Getting Started

```bash
yarn install
yarn dev          # http://localhost:3000
yarn build        # production build (static export to ./out)
yarn start        # preview the production build
```

## Deploy to GitHub Pages

```bash
yarn deploy       # builds and publishes ./out to the gh-pages branch
```

Requires GitHub Pages on the repo configured to deploy from the `gh-pages` branch.