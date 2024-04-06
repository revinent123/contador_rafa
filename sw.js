const CACHE_ELEMENTS = [
    './',
    "https://unpkg.com/react@18.2.0/umd/react.development.js",
    "https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./Styles/Styles.css",
    "./Components/Contador.js"
];
const CACHE_NAME = "v4_cache_contador_react";
const self = this;
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
                self.skipWaiting();
            }).catch(console.log);
        })
    )
});

self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName => {
                return (
                    cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
                );
            })
            );
        }).then(() => {
            self.clients.claim();
        })
    )
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res;
            }
            return fetch(e.request);
        })
    );
});