const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
// const assets = self.__WB_MANIFEST || ["/fallback"];
const assets = ["/fallback"];
console.log("all Files", assets);

// cache size limit function

const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheResponse) => {
        return (
          cacheResponse ||
          fetch(evt.request).then((fetchResponse) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(evt.request.url, fetchResponse.clone());
              limitCacheSize(dynamicCacheName, 20);
              return fetchResponse;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".jsx") > -1) {
          return caches.match("/fallback");
        }
      })
  );
});
