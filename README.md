# a-material-you-styled-portfolio

A **single-page bio website** for [m4rcel-lol](https://github.com/m4rcel-lol) (aka m5rcel), styled using **Material Design 3 (Material You)** guidelines — designed to look like a guns.lol-style hacker/creative developer identity page.

## ✨ Features

- **Hero section** — circular avatar with animated gradient ring, username, alias, tagline, live GitHub stats
- **Link stack** — stacked Material elevated cards (GitHub, Projects, Contact) with ripple effects and hover elevation
- **Featured projects** — dynamically fetched from the GitHub API, sorted by stars, with language chips
- **Responsive** — works on mobile and desktop

## 🎨 Design

- Dark Material You theme (primary: purple `#cbb8ff`, secondary: pink `#efb8c8`, tertiary: cyan `#86d5e4`)
- Rounded shapes (20–32 px radii), M3 typography scale, 8 dp spacing grid
- Entry fade-in-up animations, hover elevation transitions, animated waveform bars

## 🛠 Tech Stack

- **React 19** + **Vite 7**
- **MUI (Material UI) v7** + `@emotion`
- `@fontsource/roboto` for the Roboto typeface

## 📸 Screenshots

| Hero & Profile | Links · Projects · Creative |
|:-:|:-:|
| ![Hero section showing avatar, username m4rcel, tagline and GitHub stats pills](https://github.com/user-attachments/assets/4ac3860d-83f7-4f24-bc37-389836a0bbf0) | ![Link cards, Featured Projects and Creative Work sections](https://github.com/user-attachments/assets/0225839b-9106-4712-8fa0-87ec6eceb326) |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## ☁️ Deploy

### Vercel

Click the button below or run `npx vercel` in the project root — Vercel will auto-detect Vite and use the settings in `vercel.json`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fm4rcel-lol%2Fa-material-you-styled-portfolio)

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

### Cloudflare Pages

1. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**
2. Select this repository
3. Set the build configuration:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA fallback routing is handled automatically via `public/_redirects`.
