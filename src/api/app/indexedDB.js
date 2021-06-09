import { openDB } from "idb";

const dbConnection = openDB("recipes", 1, {
  upgrade: (db, oldVersion) => {
    if (oldVersion < 1) {
      db.createObjectStore("recipes", { keyPath: "id" });
    }
  },
});

const createRecipe = async ({
  id,
  recipeName,
  servings,
  ingredients,
  method,
  duration,
  selectedFile,
}) => {
  console.log("creating recipe");
  const db = await dbConnection;
  console.log(id);
  await db.add("recipes", {
    id,
    name: recipeName,
    serves: servings,
    photo: selectedFile,
    ingredientList: ingredients,
    steps: method,
    timeInMinutes: duration,
  });
};


const readRecipe = async (id) => {
  const db = await dbConnection;
  if (typeof id === "string") return db.get("recipes",id);
  if (Array.isArray(id)) return db.getAll();
  throw new Error("invalid ID query");
};

const updateRecipe = async (props) => {
  const db = await dbConnection;
  if (!props.id) throw new Error("ID required to update");

  const newRecipe = {
    ...(await readRecipe(props.id)),
    ...props,
  };
  db.put("recipes", newRecipe, props.id);
};

const deleteRecipe = async (id) => {
  const db = await dbConnection;
  db.delete("recipes", id);
};

const recipesDB = {
  createRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
};

export default recipesDB;
