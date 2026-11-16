// Vercel serverless function: proxies and caches the NEA PSI feed from data.gov.sg.
// Caching at the edge keeps the site well under data.gov.sg's rate limits.
module.exports = async function handler(req, res) {
  try {
    const upstream = await fetch('https://api-open.data.gov.sg/v2/real-time/api/psi', {
      headers: { Accept: 'application/json' }
    });
    const body = await upstream.text();
    res.status(upstream.status);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader(
      'Cache-Control',
      upstream.ok ? 'public, s-maxage=300, stale-while-revalidate=600' : 'no-store'
    );
    res.send(body);
  } catch (err) {
    res.status(502).setHeader('Cache-Control', 'no-store');
    res.json({ error: 'upstream_unreachable' });
  }
};
