# PWArcade: A Demo Progressive Web App

This project serves as a demonstration of Progressive Web Apps (PWAs) features but enjoing some fun retro arcade games. PWAs offer a seamless, app-like experience across devices, offline functionality through service workers, and efficient caching strategies. Together, we'll explore:

- The lifecycle and limitations of service workers.
- Caching strategies and their respective business cases.
- Debugging PWAs using browser developer tools.

![Demo Arcade App showing 6 games](public/assets/screenshot.jpg)

## Setup and Initialization

Running a Progressive Web App (PWA) through the file protocol (opening HTML files directly from your local file system without a web server) can lead to certain issues. PWAs often rely on features that are available when served over HTTP or HTTPS, and accessing them through the file protocol may not provide the necessary environment. We are using a Express as an NPM package to serve the files for this application.

```bash
# Clone this repository and download dependencies
git clone https://github.com/nJim/pwa
npm install
# Start Express to serve the application
npm start
```

## Next Steps

This example is a small look at how to register a service worker and setup a basic caching strategy. This is useful for a site of static content but is not a great usecase for developing a webapp. If I wanted to build a more feature rich PWA then I may consider adding:

* Cache Strategies: Prefetching popular games and other assets to deliver content faster and in offline modes.
* Push Notifications: Using the service worker to send push notifications anytime a new game is added to the library.
* Background Sync: Storing top game scores and syncing this information with a central database when online.

## Credits

This project is all about digging into, fixing, and showing off cool stuff about progressive web apps. Instead of creating everything from scratch, I borrowed and showcased ideas from other awesome developers.

- JavaScript games by straker: [Bomberman](https://gist.github.com/straker/769fb461e066147ea16ac2cb9463beae), [Frogger](https://gist.github.com/straker/82a4368849cbd441b05bd6a044f2b2d3), [Missile Command](https://gist.github.com/straker/afc4e2a30b6df772a5f9f6ef01751d41), [Pong](https://gist.github.com/straker/81b59eecf70da93af396f963596dfdc5), [Snake](https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4), [Tetris](https://gist.github.com/straker/3c98304f8a6a9174efd8292800891ea1)
- Codepen by boldfacedesign [Brand retro text effect](https://codepen.io/boldfacedesign/pen/DpXjzY)
- Codepen by nxworld [Navigation shine effect](https://codepen.io/nxworld/pen/ZYNOBZ)
- Font are provided and hosted by Google Fonts
- Icons were designed by DALL·E 3 Generative AI

## Creating your own PWA with basic caching features

### Step 1: Set Up Your Project

For this simple demo, we will create a PWA using only static assets as  simple JavaScript to access caches and service workers. Start by creating a new directory for your project. Inside the project folder, initialize a new Node.js project and setup Express to serve the application from a public directory:

```bash
# Setup a project wih an Express web server and web root folder
npm init -y
npm install express --save
mkdir public
```

```js
// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Step 2: Create Your HTML


We've opted for simplicity by using a single HTML file as a static page. This intentional choice is aimed at helping developers, especially those new to PWAs, understand the core concepts without feeling overwhelmed. However, it's worth noting that PWAs are often developed within complex JavaScript applications like React, Next.js, SvelteKit, and many others.

To get started, create your web app's layout in an HTML file, for instance, `public/index.html`. Ensure that you include the required meta tags for viewport settings. This should include a link to `manifest.json` that will be added in the next step.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome PWA</title>
  <link rel="manifest" href="/manifest.json">
</head>
<body>
  <!-- Your app content goes here -->
</body>
</html>
```

### Step 3: Add a Manifest File

Create a `public/manifest.json` file in your project directory. The file serves as a blueprint for Progressive Web Apps (PWAs), encapsulating essential metadata and configurations. It defines the app's identity, appearance, and behavior, enabling seamless integration with users' devices, improved discoverability, and a consistent experience across various platforms.

```json
{
  "name": "My Awesome PWA",
  "short_name": "My Awesome PWA",
  "description": "A description of your PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4285f4",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### Step 4: Set Up a Basic Service Worker

Service workers act as silent managers, giving web applications with offline capabilities, background synchronization, and efficient caching. These JavaScript workers run separately from the main browser thread, enabling PWAs to deliver a faster and more reliable user experience by intercepting network requests and managing data caching, ultimately fostering seamless interactions regardless of network conditions.

Create a `public/service-worker.js` file. In this simple example, the service worker is designed to cache all items listed in the CACHE_ASSETS array during installation. This background task allows for prefetching a variety of assets, optimizing load times for users engaging with your web app. This prefetching capability ensures that a substantial set of assets is readily available, contributing to an enhanced user experience by minimizing loading delays. It's worth noting that there are various caching strategies available, each offering unique advantages and use cases beyond this basic example.

```js
// public/service-worker.js
const CACHE_NAME = 'my-pwa-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/icons/icon-192x192.png',
  // Add other paths to be cached
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### Step 5: Register the Service Worker

Registering a service worker enables the Progressive Web App (PWA) features. This process establishes a bridge between the web page and the separate service worker that is running the background. Update the `public/index.html` file to register the service worker by adding the following script:

```js
<!-- index.html -->
  <!-- ... (same as before) ... -->
<body>
  <!-- ... (same as before) ... -->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  </script>
</body>
</html>
```

### Step 6: Run the Application

```bash
node server.js
```

View your app in your web browser and use the debugging tools to confirm the correct loading of the manifest and the storage of assets in the cache. Experiment by temporarily disabling internet access to ensure the webpage still loads seamlessly. While this newfound control over caching opens up exciting possibilities, it does, regrettably, mean fewer opportunities to indulge in the Chrome Dino game.
