// import md5 from "md5";

const STATIC_ASSETS = [
  "/images/salad24x24px.png",
  "/images/salad32x32px.png",
  "/images/salad64x64px.png",
  "/images/salad128x128px.png",
  "/images/salad256x256px.png",
  "/images/salad512x512px.png",
  "/manifest.json",
  "/fonts/roboto/300.ttf",
  "/fonts/roboto/400.ttf",
  "/fonts/roboto/500.ttf",
  "/fonts/roboto/700.ttf",
  "/",
];

// // eslint-disable-next-line no-restricted-globals
// const dynamicUrls = self.__WB_MANIFEST;
// const urls = [...STATIC_ASSETS, ...dynamicUrls.map(({ url }) => url)];
// const hash = md5(JSON.stringify(urls));

const installEvent = async (event) => {
  console.log(event, "install");
  const cache = await caches.open(hash);
  cache.addAll(urls);
};
const activeEvent = async (event) => {
  console.log(event, "active");
  const cacheKeys = await caches.keys();
  const keysToDelete = cacheKeys.filter((key) => key !== hash);
  const promisesArray = keysToDelete.map((key) => caches.delete(key));
  await Promise.all(promisesArray);
};
const fetchEvent = async (event) => {
  console.log(event, "fetch");
  const cacheResponse = caches.match(event.request);
  if (!cacheResponse) {
    return fetch(event.request);
  }
  return cacheResponse;
};

// self.addEventListener("install", (event) => {
//   event.waitUntil(installEvent(event));
// });

// self.addEventListener("active", (event) => {
//   event.waitUntil(activeEvent(event));
// });

// self.addEventListener("fetch", (event) => {
//   event.waitUntil(fetchEvent(event));
// });
