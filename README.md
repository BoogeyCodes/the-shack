# The Shack — Menu Website

A fully responsive static menu website for **The Shack** ("Come Hungry, Leave Happy"),
built with **React + Vite + Tailwind CSS**.

## Features

- Sticky navbar with logo, section links & mobile menu
- Hero section with brand identity and call-to-action
- "This Week's Specials" showcase using the promo banners
- Full menu with **14 categories** (burgers, pizza with S/M/L pricing, special
  pizza, shawarmas, wings, tenders, sandwiches, nuggets, wraps, pastas, fries,
  drinks, dips & extras) with a category filter
- **12 combo deals** section
- Footer with location, phone, hours & free-delivery badge
- Forest-green & gold brand palette, Poppins + Inter typography
- Fully responsive (mobile → tablet → desktop)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Editing the menu

All menu content (items, prices, deals, contact info) lives in a single file:

```
src/data/menu.js
```

Change prices or add items there — the UI updates automatically. No component
changes needed.

## Project structure

```
src/
  data/menu.js            # all menu data (edit here)
  components/
    Navbar.jsx
    Hero.jsx
    DeliveryStrip.jsx
    Specials.jsx
    Menu.jsx
    CategoryCard.jsx
    Deals.jsx
    Footer.jsx
    Logo.jsx
    SectionHead.jsx
  App.jsx
  main.jsx
  index.css
public/images/            # promo banner images
```
