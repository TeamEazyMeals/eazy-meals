import md5 from "md5";

const STATIC_ASSETS = [
  "/images/restaurant_black_24dp.svg",
  "/images/salad24x24px.png",
  "/images/salad32x32px.png",
  "/images/salad64x64px.png",
  "/images/salad128x128px.png",
  "/images/salad256x256px.png",
  "/images/salad512x512px.png", 
];

// eslint-disable-next-line no-restricted-globals
const dynamicUrls = self.__WB_MANIFEST;
console.log(dynamicUrls, "dyanmmmmmmmmmmmmmmmmmmmmmmm")
const urls = [...STATIC_ASSETS, ...dynamicUrls.map(({url})=>url)]
console.log(urls, "bbbbbbbbbbbbbbbbbb")
const hash = md5(JSON.stringify(urls));
console.log(hash);

const installEvent = async (event) => {
  const cache = await caches.open(hash);
  cache.addAll(urls);
};
const activeEvent = async (event) => {
  const cacheKeys = await caches.keys();
  const keysToDelete =  cacheKeys.filter((key)=>key!==hash)
  const promisesArray = keysToDelete.map(key => caches.delete(key))
  await Promise.all(promisesArray)
};
const fetchEvent = async () => {};

self.addEventListener("install", (event) => {
  event.waitUntil(installEvent(event));
});

self.addEventListener("active", (event) => {
  event.waitUntil(activeEvent(event));
});

self.addEventListener("fetch", (event) => {
  event.waitUntil(fetchEvent(event));
});





// self.addEventListener("install", (evt) => {
//   evt.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       console.log("caching shell assets");
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("activate", (evt) => {
//   evt.waitUntil(
//     caches.keys().then((keys) => {
//       return Promise.all(
//         keys
//           .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
//           .map((key) => caches.delete(key))
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (evt) => {
//   evt.respondWith(
//     caches
//       .match(evt.request)
//       .then((cacheResponse) => {
//         return (
//           cacheResponse ||
//           fetch(evt.request).then((fetchResponse) => {
//             return caches.open(dynamicCacheName).then((cache) => {
//               if (evt.request.url.indexOf("http") > -1) {
//                 cache.put(evt.request.url, fetchResponse.clone());
//                 limitCacheSize(dynamicCacheName, 100);
//                 return fetchResponse;
//               }
//             });
//           })
//         );
//       })
//       .catch(() => {
//         return caches.match("/fallback");
//       })
//   );
// });
