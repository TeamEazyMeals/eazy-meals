import Webpush from "web-push";

const publicKey = Webpush.generateVAPIDKeys().publicKey;

const SwDev = () => {
  const swURL = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swURL)
      .then((response) => {
        console.log("service worker registered", response);
        response.pushManager.getSubscription().then((subscription) => {
          return response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKey,
          });
        });
      })
      .catch((err) => console.log("service worker NOT registered", err));
  }
};

export default SwDev;
