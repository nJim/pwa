const CACHE_NAME = 'which-webchef-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/assets/icon-144x144.png',
  '/assets/icon-192x192.png',
  '/assets/icon-72x72.png',
  '/assets/icon-16x16.png',
  '/assets/icon-48x48.png',
  '/assets/icon-96x96.png',
  '/assets/icon-192x192-maskable.png',
  '/assets/icon-512x512.png',
  '/assets/webchefs1.webp',
  '/assets/webchefs2.webp',
  '/assets/webchefs3.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});
