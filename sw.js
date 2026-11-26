/* EP Tracker (TEST) offline files. VERSION changes with every update. */
const VERSION = 'ept-test-3';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
// fetch straight from the server, never from the browser's short-term cache (GitHub Pages allows 10 minutes)
const fresh = (u) => fetch(new Request(u, { cache: 'no-cache' }));
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => Promise.all(FILES.map((u) => fresh(u).then((r) => r.ok && c.put(u, r))))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  const page = req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname);
  if (page) {
    // the app page: newest copy from the server when online (so updates show at once), the saved copy when offline
    e.respondWith(caches.open(VERSION).then((c) => {
      const net = fresh(req.url.split('#')[0]).then((r) => { if (r && r.ok) { c.put('index.html', r.clone()); c.put('./', r.clone()); } return r; });
      const slow = new Promise((res) => setTimeout(res, 5000)).then(() => c.match('index.html'));
      return Promise.race([net, slow.then((h) => h || net)]).catch(() => c.match('index.html')).then((r) => r || c.match('./'));
    }));
    return;
  }
  // icons and the manifest: saved copy, refreshed in the background
  e.respondWith(caches.open(VERSION).then((c) => c.match(req, { ignoreSearch: true }).then((hit) => {
    const net = fresh(req.url).then((r) => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  })));
});
