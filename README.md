# Haze monitor

Singapore haze (NEA 24-hour PSI and PM2.5 via data.gov.sg) and ASEAN city weather (Open-Meteo).

## Files

- `index.html` – the whole app (no build step)
- `api/psi.js` – optional Vercel function that proxies and caches the NEA PSI feed (5 min)
- `vercel.json` – clean URLs and basic security headers
- `package.json` – sets the Node version for the function

## Deploy

1. Push this folder to a GitHub repository (files at the repo root).
2. In Vercel choose **Add New → Project**, import the repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.

The page calls `/api/psi` first and falls back to data.gov.sg directly, so it still works as a plain static site or when opened locally. Open-Meteo is called straight from the browser.

## Data credits

- Haze data: National Environment Agency (NEA) via data.gov.sg, under the Singapore Open Data Licence.
- Weather data: Open-Meteo.com (CC BY 4.0).
