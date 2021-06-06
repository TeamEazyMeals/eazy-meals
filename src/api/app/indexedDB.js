import { duration } from "@material-ui/core";
import { openDB } from "idb";
import { v4 as createId } from "uuid";

const dbConnection = openDB("recipes", 1, {
  upgrade: (db, oldVersion) => {
    if (oldVersion < 1) {
      db.createObjectStore("recipes", { keyPath: "id" });
    }
  },
});

const createRecipe = async ({
  recipeName,
  servings,
  selectedFile,
  ingredients,
  method,
  duration
}) => {
  const db = await dbConnection;
  db.add({
    id: createId(),
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
  if (typeof id === "string") return await db.get(id);
  if (Array.isArray(id)) return await db.getAll();
  throw new Error("invalid ID query");
};

const updateRecipe = async (props) => {
  if (!props.id) throw new Error("ID required to update");

  const newTask = {
    ...(await readTask(props.id)),
    ...props,
  };
  db.put("recipes", newTask, props.id);
};

const deleteRecipe = async (id) => {
  const db = await dbConnection;
  db.delete("recipes", id);
};

const recipes = {
  createRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
};

export default recipes;
