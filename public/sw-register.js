/*
 * Register the service worker.
 *
 * Enable the Progressive Web App features and functionalities. Service workers
 * are scripts that run in the background, separate from the web page, providing
 * a range of capabilities that enhance the user experience. Registration
 * establishes a communication channel between the service worker and browser.
 */

// Check if the navigator (browser) supports the Service Worker API.
// There are few known issues: https://caniuse.com/serviceworkers
if ('serviceWorker' in navigator) {
  console.log("Registering the service worker")
  // Service Workers follow an event-driven architecture where operations are
  // executed asynchronously without blocking the main thread. This aligns with
  // the principles of concurrent and parallel execution.
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
