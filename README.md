# Shivgeeta Industries — Showcase Website

React + Vite + Tailwind CSS v4 + Lucide icons.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

- `src/data.js` — company details, product catalog, infill cores, RAL colours, sectors, certifications. Edit content here.
- `src/components/` — one file per page section (Header, Hero, About, Products + spec modal, Specs, Infill + RAL previewer, Applications, Trust, Contact, Footer).
- `src/assets/img/` — product photos cropped from the supplied PDF catalog.

## To do before going live

- Replace the placeholder email (`youremail@example.com`) in `src/data.js`.
- Add confirmed certificates to `CERTS` in `src/data.js` and render `<Trust />` again in `src/App.jsx`.
- The contact form only simulates submission (`src/components/Contact.jsx`, `submit`). Connect it to an email/CRM endpoint.
- Confirm you have the rights to use the product photos (they come from a third-party brochure).
