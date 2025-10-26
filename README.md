# BuildEdge — Construction Management Landing

Modern, high-end single-page landing site built with Vite + React + Tailwind. Includes premium animations, glassmorphism aesthetic, parallax-inspired hero with embedded Spline 3D, and responsive sections.

## Features

- Sticky navbar with dark mode toggle and smooth scroll
- Spline 3D hero with soft gradients and glassmorphism
- Animated value props, services, portfolio with lightbox, process timeline
- Testimonials carousel with auto-play and manual dots
- Contact form using react-hook-form + zod with validation
- Accessible, responsive, and SEO-friendly structure

## Getting Started

1. Install dependencies
   - Frontend is already configured in this environment. If running locally, install with:
     ```bash
     npm install
     npm run dev
     ```
2. Development
   - Start the dev server (Vite): `npm run dev`
   - Open the app at the printed local URL
3. Build
   - Production build: `npm run build`
   - Preview: `npm run preview`

## Deploy

Deploy easily to Vercel or Netlify:
- Vercel: import the repository, framework preset "Vite", build command `npm run build`, output `dist`.
- Netlify: build command `npm run build`, publish directory `dist`.

## Notes

- No backend is required for this landing page. The contact form currently shows a frontend-only success message.
- Images are lazy-loaded with a blur-up effect for performance.
- All animations favor subtle, polished motion for a premium feel.
