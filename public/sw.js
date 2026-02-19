// Service Worker for caching video & image assets
// This ensures videos don't re-download on page refresh

const CACHE_NAME = 'andy-media-cache-v1';

// Cache video/image responses using a Cache-First strategy
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only cache media files (images specifically, videos bypass SW for range-request streaming)
    const isImage = /\.(webp|jpg|jpeg|png|gif|svg)(\?.*)?$/i.test(url.pathname);

    if (!isImage) return; // Let everything else (including .mp4) go through normally

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    // Serve from cache (no network request = zero data usage)
                    return cachedResponse;
                }

                // Not in cache: fetch from network, then cache for next time
                return fetch(event.request).then((networkResponse) => {
                    // Only cache successful responses
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            });
        })
    );
});

// Clean up old caches when a new SW version is activated
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    // Take control of all pages immediately
    self.clients.claim();
});

// Skip waiting to activate new SW immediately
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
