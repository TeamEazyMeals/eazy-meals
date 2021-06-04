import { openDB } from "idb";

const dbConnection = openDB("recipes", 1, {
  upgrade: (db, oldVersion) => {
    if (oldVersion < 1) {
      db.createObjectStore("recipes", { keyPath: "id" });
    }
  },
});

const createRecipe = ()=>{
    
}