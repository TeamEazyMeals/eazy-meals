import { openDB } from "idb";
import axios from "axios";
const dbConnection = openDB("internal-recipes", 1, {
  upgrade: (db, oldVersion) => {
    if (oldVersion < 1) {
      db.createObjectStore("data", { keyPath: "id" });
      db.createObjectStore("meta", { keyPath: "id" });
    }
  },
});
const sync = async (auto = false) => {
  const db = await dbConnection;
  const { data: remoteHashes } = await axios.get("/data/recipe-hashes.json");
  const localHashes = (await db.get("meta", "hashes")) || {
    id: "hashes",
    primary: null,
    recipes: {},
  };
  /*
   * If the primary key in our local recipes and remote recipes are the same then that means that no changes occured since the last sync and the sync function should not proceed.
   */
  if (remoteHashes.primary === localHashes.primary) {
    return;
  }
  const remoteRecipeIdList = Object.keys(remoteHashes.recipes);
  const localRecipeIdList = Object.keys(localHashes.recipes);
  const process = async () => {
    const localPromises = localRecipeIdList.map(async (localRecipeId) => {
      /*
       * If the recipe ID is in local DB, but not on remote DB that means that the recipe was deleted on the remote DB since the last sync, and should also be deleted on  the local DB
       */
      if (!remoteRecipeIdList.includes(localRecipeId)) {
        await db.delete("data", localRecipeId);
      }
    });

    await Promise.all(localPromises);
    const remotePromises = remoteRecipeIdList.map(async (remoteRecipeId) => {
      const remoteRecipeHash = remoteHashes.recipes[remoteRecipeId];
      const localRecipeHash = localHashes.recipes[remoteRecipeId];
      /**
       * If the recipe exists in both the remote and local DB, and the hashes are the same it means that it has not changed since, and nothing should be done with this specific recipe
       */
      if (remoteRecipeHash === localRecipeHash) {
        return;
      }
      const { singleRemoteRecipe } = await axios.get(
        `/data/recipes/${remoteRecipeId}.json`
      );
      console.log(singleRemoteRecipe, "dataaaaaaaaaaa");
      /*
       * If the recipe ID is in remote DB, but not on local DB that means that the recipe was created on the remote DB since the last sync, and should also be created on the local DB
       */
      if (!localRecipeIdList.includes(remoteRecipeId)) {
        await db.add("data", singleRemoteRecipe);
      }
      /**
       * If none of the above are true, then it means that the recipe exists in the local and remote DB, but the data has changed in the remote DB since the last time it was synced. This means that the local DB recipe should be updated to be the same as the remote recipe.
       */
      await db.put("data", singleRemoteRecipe);
    });
    await Promise.all(remotePromises);
    console.log("putting in meta");
    await db.put("meta", remoteHashes);
  };
  if (auto) {
    await process();
    return null;
  }
  return process;
};
const internalRecipes = {
  sync,
};
export default internalRecipes;
