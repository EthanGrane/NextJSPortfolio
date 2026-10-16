# Gatto's Pizzeria website: remaining work

Page: `ethangrane.com/GattosPizzeria` (`app/[locale]/GattosPizzeria/`).
Most content lives in `components/gattos/config.ts`.

Priority: 🔴 before launch · 🟡 nice to have · ⚪ technical

---

## 1. Press kit 🔴

Journalists, streamers and curators look for one page plus a ZIP with everything.
Plan: a new route at `/GattosPizzeria/press` with the same look as the landing page, a "Press kit" link in the nav and footer, and a ZIP download.

### Factsheet
- [ ] Developer / publisher: Ethan Grané
- [ ] Based in: (city, country)
- [ ] Release date: February 2027 (exact day once known)
- [ ] Platforms: PC (Steam). Steam Deck status?
- [ ] Price: TBD
- [ ] Languages: English, Spanish (interface, audio, subtitles)
- [ ] Links: Steam, website, social media
- [ ] Press contact email (consider a dedicated one, e.g. `press@…`)

### Description
- [ ] One-line pitch: *Bake authentic Neapolitan pizzas in your grandpa's restaurant!*
- [ ] Short description (~50 words)
- [ ] Long description (~200 words)
- [ ] Key features (5–6 bullets)
- [ ] Story / history of the project (why, how long, solo dev)

### Assets (put all of these in the ZIP)
- [ ] Logo: transparent PNG at high resolution (+ SVG if available), on light and dark backgrounds
- [ ] Icon: the cat face, transparent PNG 1024×1024
- [ ] Key art / capsule **without the placeholder magenta character** (see section 2)
- [ ] Screenshots: full-resolution 1920×1080 PNG (the 7 in `SteamPage/Screenshoots`, the 4 new ones you sent, and any new ones)
- [ ] Trailer: YouTube link + downloadable MP4
- [ ] 3–5 short GIFs/clips of gameplay (kneading, slicing, oven, day cycle)
- [ ] Main character art (the cat) on a transparent background

### Other
- [ ] Credits (team, music, sound, fonts)
- [ ] Content creator policy: "You may stream and monetize videos of Gatto's Pizzeria"
- [ ] How to request Steam keys (email or a form such as Keymailer)
- [ ] Awards / quotes (when they exist)

---

## 2. Content and assets 🔴

- [ ] **Trailer**: set `TRAILER_URL` in `config.ts`. The hero button changes from "Screenshots" to "Trailer" automatically.
- [ ] **Steam capsules still show the placeholder magenta character** (`CapsulaPrincipal`, `CapsulaCabecera`, `CapsulaVertical`, `CapsulaBiblioteca`…). Replace them before launch. The website's `og-image.jpg` (preview image on social media) uses `EncabezadoBiblioteca.png`, which is clean, but update it too if the art changes.
- [ ] **Social media**: create and add X/Bluesky, Discord, YouTube, TikTok, Instagram links to the footer (it currently has only Steam, GitHub and email).
- [ ] **Roadmap**: add milestones to `ROADMAP` in `config.ts` as they get announced (demo, Steam Next Fest, launch day, updates). Set `done: true` on reached ones.
- [ ] **Exact release date** once confirmed (roadmap, final CTA text, metadata description in `layout.tsx`).
- [ ] Review all copy (currently written from the Steam description).
- [ ] Night-time screenshot with more light, if you want one (the night section uses the ingredient shop).
- [ ] Transparent PNG renders of the ingredients, to replace the hand-drawn silhouettes with exact ones (`scripts/gattos-patterns.py`).

## 3. Nice to have 🟡

- [ ] FAQ section: price, release date, Steam Deck, controller support, languages, multiplayer (no).
- [ ] Discord / newsletter CTA ("Get notified on launch day").
- [ ] Gameplay GIFs or a muted autoplay video in the hero.
- [ ] Mobile menu (on mobile the nav links are hidden, only logo + Wishlist show).
- [ ] Track clicks on "Wishlist" buttons with Vercel Analytics custom events, to know which button converts.
- [ ] Embed the official Steam widget (`store.steampowered.com/widget/3137770/`) in the final section.

## 4. Technical ⚪

- [ ] **Commit and push** the changes from your PC (the portfolio header/footer are hidden on this route; `sitemap.ts` includes the page).
- [ ] **Case-sensitive URL**: `/gattospizzeria` (lowercase) returns 404. Add a redirect to `/GattosPizzeria` and test it carefully to avoid redirect loops.
- [ ] Link the Gatto's Pizzeria card on `/gamedev` to this page (it currently only links to Steam).
- [ ] After deploying: submit the sitemap in Google Search Console and test the social preview (e.g. opengraph.xyz).
- [ ] Run Lighthouse (performance + accessibility) on the deployed page.
- [ ] Language: the page is English only. `/es/GattosPizzeria` shows the same English page (Spanish browsers get sent there by the i18n proxy). Decide whether to exclude this route from locale detection.
- [ ] Portfolio-wide issue: Once UI's global CSS defines classes like `pt-16`, `mt-8` and `p { margin: 0 }` that override Tailwind. Other portfolio pages may have wrong spacing because of it. The game page avoids this by using its own CSS module.

---

## Assets I need from you

| Asset | For |
|---|---|
| Trailer (YouTube link + MP4) | Hero button, press kit |
| Logo at high resolution / vector | Press kit |
| Key art without the placeholder character | Steam, press kit, social preview |
| Gameplay GIFs or short clips | Press kit, hero |
| Ingredient renders (transparent PNG) | Exact background silhouettes |
| Social media links | Footer, press kit |
| Press contact email, price, Steam Deck status, credits | Press kit factsheet |
