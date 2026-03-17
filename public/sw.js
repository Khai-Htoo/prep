self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Minimal fetch handler to satisfy Chrome's PWA installable criteria.
  // It handles fetches pass-through by default.
  event.respondWith(
    fetch(event.request).catch(() => {
      // Fallback response for offline
      return new Response("Offline mode - some content may not be available.");
    })
  );
});
