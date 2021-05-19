const SYNC_INTERVAL_IN_MS = 30 * 60 * 1000;

const calcIfShouldSync = () => {
  const appString = window.localStorage.getItem("app");

  const currentTimeStamp = new Date().getTime();
  if (!appString) {
    window.localStorage.setItem(
      "app",
      JSON.stringify({ lastSynced: currentTimeStamp })
    );
    return true;
  }
  const appData = JSON.parse(appString);

  if (appData.lastSynced + SYNC_INTERVAL_IN_MS > currentTimeStamp) {
    return false;
    
  }
  return true;
};
export default { calcIfShouldSync };
