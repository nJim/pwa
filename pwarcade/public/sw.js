/*
 * Service worker implementation.
 *
 * The lifecycle of a service worker consists of three phases: registration,
 * installation, and activation. During registration, the service worker script
 * is associated with the web application. The installation phase involves
 * downloading and caching resources, while activation allows the service worker
 * to control pages and respond to events. Once activated, the service worker
 * remains active in the background, enabling features like offline support,
 * background synchronization, and push notifications.
 */
const CACHE_NAME = 'pwarcade-v1';

const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/assets/icon.png',
  '/assets/marquee-pong.jpg',
  '/assets/marquee-snake.jpg',
  '/assets/marquee-tetris.jpg',
  '/assets/marquee-frogger.jpg',
  '/assets/marquee-bomberman.jpg',
  '/assets/marquee-missile-command.jpg',
  'https://fonts.googleapis.com/css?family=Mr+Dafoe',
  'https://fonts.googleapis.com/css?family=Titillium+Web:900'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

self.addEventListener('activate', event => {
  // ... activation logic ...
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
