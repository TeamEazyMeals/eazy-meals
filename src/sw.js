const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";

const assets = self.__WB_MANIFEST;

console.log("all Files", assets);

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
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evt) => {
  console.log("evtRequest", evt.request);
  evt.respondWith(
    caches.match(evt.request).then((cacheResponse) => {
      return (
        cacheResponse ||
        fetch(evt.request).then((fetchResponse) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(evt.request.url, fetchResponse.clone());
            return fetchResponse;
          });
        })
      );
    })
  );
});
