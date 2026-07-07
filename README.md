# Shuswap Commons

A modern local business and community directory concept for the Shuswap region.

Shuswap Commons is being built as a curated, mobile-first local guide for discovering businesses, services, makers, food, outdoor recreation, accommodations, and community resources across the Shuswap.

The project is currently in an early frontend prototype stage, focused on matching the approved visual mockups before connecting the site to a CMS.

## Project Status

Current stage: **Astro frontend prototype**

The current build uses mock data and local placeholder images while the visual system, page layouts, and responsive behavior are developed.

Sanity CMS has been created separately but is not connected yet. The plan is to connect Sanity after the frontend structure is stable.

## Tech Stack

* Astro
* TypeScript
* CSS
* Static mock data
* Local image assets
* Future CMS: Sanity
* Future deployment target: Netlify

## Current Pages

The prototype is focused on three core views:

* Home page: `/`
* Directory page: `/directory`
* Listing detail page: `/listings/shuswap-paddles`

These pages are based on desktop and mobile mockups for the intended Shuswap Commons experience.

## Project Structure

```txt
src/
├─ components/
│  └─ ListingCard.astro
├─ data/
│  └─ listings.ts
├─ pages/
│  ├─ index.astro
│  ├─ directory.astro
│  └─ listings/
│     └─ [slug].astro
└─ styles/
   └─ global.css
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Image Assets

The prototype expects local image files in:

```txt
public/images/
```

Current expected filenames include:

```txt
hero-shuswap.jpg
area-lake.jpg
listing-diner.jpg
listing-deck.jpg
listing-paddles.jpg
listing-mercantile.jpg
listing-wellness.jpg
listing-legal.jpg
listing-watershed.jpg
listing-bnb.jpg
listing-plumbing.jpg
listing-coffee.jpg
listing-trails.jpg
listing-canoes.jpg
```

These are temporary filler images used for layout and visual testing.

## Design Direction

The visual direction is a premium, dark, rural-local directory interface:

* Deep teal and black background system
* Warm amber accent color
* Cream typography
* Glass-style cards and panels
* Image-led listing cards
* Strong mobile layouts
* Clear local trust and freshness signals
* Modern design without sacrificing usability for local/rural audiences

## Planned CMS Integration

The frontend will eventually connect to Sanity.

Likely content models:

* Listing
* Category
* Area
* Tag
* Collection
* Site settings

The CMS schema should be created after the frontend mockup structure is stable, so the data model matches the actual design needs.

## Notes

This is an early prototype and not yet production-ready. The current priority is visual accuracy, layout stability, and responsive behavior before adding CMS queries, live content, forms, deployment automation, or SEO polish.