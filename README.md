# a-material-you-styled-portfolio

A **single-page bio website** for [m4rcel-lol](https://github.com/m4rcel-lol) (aka m5rcel), styled using **Material Design 3 (Material You)** guidelines — designed to look like a guns.lol-style hacker/creative developer identity page.

## ✨ Features

- **Hero section** — circular avatar with animated gradient ring, username, alias, tagline, live GitHub stats
- **Link stack** — stacked Material elevated cards (GitHub, SoundCloud, Music & Releases, Projects, Contact) with ripple effects and hover elevation
- **Featured projects** — dynamically fetched from the GitHub API, sorted by stars, with language chips
- **Creative section** — music cards for *lost in abyss* (single) and *living zone* (2026 release) with animated waveform visuals
- **Responsive** — works on mobile and desktop

## 🎨 Design

- Dark Material You theme (primary: purple `#cbb8ff`, secondary: pink `#efb8c8`, tertiary: cyan `#86d5e4`)
- Rounded shapes (20–32 px radii), M3 typography scale, 8 dp spacing grid
- Entry fade-in-up animations, hover elevation transitions, animated waveform bars

## 🛠 Tech Stack

- **React 19** + **Vite 7**
- **MUI (Material UI) v7** + `@emotion`
- `@fontsource/roboto` for the Roboto typeface

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
