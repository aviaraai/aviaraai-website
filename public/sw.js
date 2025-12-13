// Service Worker for aggressive video caching
const CACHE_NAME = 'aviara-media-cache-v1';
const VIDEO_CACHE = 'aviara-video-cache-v1';

// Critical images to pre-cache immediately (fast)
const CRITICAL_IMAGES = [
  '/cow_cover.webp',
  '/cow_background.webp',
  '/indian-cow.webp',
];

// Video to cache in background (doesn't block installation)
const BACKGROUND_CACHE = [
  '/api/media/herosection.mp4',
];

// Install event - pre-cache images, then video in background
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  // Pre-cache critical images first (fast, blocks installation)
  event.waitUntil(
    caches.open(VIDEO_CACHE).then((cache) => {
      console.log('[SW] Pre-caching critical images');
      return cache.addAll(CRITICAL_IMAGES).catch(err => {
        console.warn('[SW] Failed to cache some images:', err);
      });
    })
  );

  // Cache video in background (doesn't block installation)
  caches.open(VIDEO_CACHE).then((cache) => {
    console.log('[SW] Background caching video...');
    cache.addAll(BACKGROUND_CACHE).then(() => {
      console.log('[SW] Video cached successfully!');
    }).catch(err => {
      console.warn('[SW] Failed to cache video:', err);
    });
  });

  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== VIDEO_CACHE && name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle requests from same origin
  if (url.origin !== location.origin) {
    return;
  }

  // Handle video and media files
  if (
    url.pathname.startsWith('/api/media/') ||
    url.pathname.match(/\.(mp4|webm|gif|webp|jpg|jpeg|png)$/)
  ) {
    event.respondWith(
      caches.open(VIDEO_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[SW] Serving from cache:', url.pathname);
            return cachedResponse;
          }

          console.log('[SW] Fetching and caching:', url.pathname);
          return fetch(request).then((networkResponse) => {
            // Only cache successful responses
            if (networkResponse && networkResponse.status === 200) {
              // Clone the response before caching
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch((error) => {
            console.error('[SW] Fetch failed:', error);
            throw error;
          });
        });
      })
    );
  }
});
