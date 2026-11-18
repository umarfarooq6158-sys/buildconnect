# BuildConnect — Frontend MVP

A responsive React + Vite + Tailwind CSS MVP for a Hyderabad construction marketplace.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Included

- Homepage with category discovery, featured professionals, how-it-works and about sections
- Professional directory with name, category and location filters
- Professional detail pages with services, illustrative portfolio imagery, phone and WhatsApp contact links
- Material supplier directory with category, keyword and location filters
- Project submission form with browser-local persistence (`localStorage` key: `buildconnect_projects`)
- Responsive mobile navigation and layouts

## Project structure

- `src/components` — shared navigation, footer and reusable cards
- `src/data/mockData.js` — demonstration professionals, categories and suppliers
- `src/pages` — route-level pages
- `src/App.jsx` — React Router route definitions

## Notes

- This is a frontend-only demonstration. Mock data is stored in `src/data/mockData.js`.
- Submitted project briefs are stored only in the current browser using localStorage; no server request is made.
- Contact buttons use `tel:` and WhatsApp links. Replace demonstration phone numbers with verified business contacts before launch.
- Portfolio images are illustrative remote Unsplash images.
- The app is structured so mock-data access can later be replaced with Spring Boot API calls.
