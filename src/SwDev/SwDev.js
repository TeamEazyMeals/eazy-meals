const SwDev = () =>{
  const swURL = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swURL)
      .then((reg) => console.log("service worker registered", reg))
      .catch((err) => console.log("service worker NOT registered", err));
  }
}

export default SwDev;