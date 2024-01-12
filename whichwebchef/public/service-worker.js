var GHPATH = '/pwa';
const CACHE_NAME = 'which-webchef-cache';
const urlsToCache = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/styles.css`,
  `${GHPATH}/app.js`,
  `${GHPATH}/manifest.json`,
  `${GHPATH}/assets/icon-144x144.png`,
  `${GHPATH}/assets/icon-192x192.png`,
  `${GHPATH}/assets/icon-72x72.png`,
  `${GHPATH}/assets/icon-16x16.png`,
  `${GHPATH}/assets/icon-48x48.png`,
  `${GHPATH}/assets/icon-96x96.png`,
  `${GHPATH}/assets/icon-192x192-maskable.png`,
  `${GHPATH}/assets/icon-512x512.png`,
  `${GHPATH}/assets/webchefs1.webp`,
  `${GHPATH}/assets/webchefs2.webp`,
  `${GHPATH}/assets/webchefs3.webp`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cacheResponse) => {
        if (cacheResponse) {
          return cacheResponse;
        } else {
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
      })
    )
  );
});
