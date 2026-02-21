const CACHE_NAME = 'ttr-menu-v1'; // ✅ bump this number on every deploy e.g. v2, v3
const ASSETS = [
    '/',
    '/index.html',
    '/menu.js',
    '/app.js',
    '/manifest.json'
];

// Install — cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting(); // ✅ activate new SW immediately
});

// Activate — delete all old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME) // ✅ delete old versions
                    .map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim(); // ✅ take control of all open tabs immediately
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Update cache with fresh response
                const copy = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                return response;
            })
            .catch(() => caches.match(event.request)) // fallback if offline
    );
});
