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
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwarcade').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/play.html?game=frogger',
        '/play.html?game=tetris',
        '/play.html?game=bomberman',
        '/play.html?game=snake',
        '/play.html?game=pong',
        '/play.html?game=missile-command',
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  // ... activation logic ...
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
