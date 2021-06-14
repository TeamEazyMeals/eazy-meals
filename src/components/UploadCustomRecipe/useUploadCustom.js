import React, { useState } from "react";
import { v4 as createId } from "uuid";
import recipesDB from "../../api/app/indexedDB";
<<<<<<< HEAD
//import ReactFileReader from "react-file-reader";
=======
>>>>>>> 9e42d29258f734b9c6438d73b689fbb440054557

const useUploadCustom = () => {
  const [recipeName, setRecipeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [servings, setServings] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");
  const [duration, setDuration] = useState(0);
  const [recipeObject, setRecipeObject] = useState("");
  const [editRecipe, setEditRecipe] = useState(false);

  const recipeNameHandler = (e) => {
    setRecipeName(e.target.value);
    console.log(recipeName);
  };

  const servingsHandler = (e) => {
    setServings(e.target.value);
  };

  const durationHandler = (e) => {
    setDuration(e.target.value);
  };

  const selectedFileHandler = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const ingredientsHandler = (e) => {
    setIngredients(e.target.value);
    console.log(ingredients);
  };

  const methodHandler = (e) => {
    setMethod(e.target.value);
    console.log(method);
  };

  const handleEditRecipe = () => {
    setEditRecipe(!editRecipe);
  };

  const fileDataHandler = async (e) => {
    e.preventDefault();
    const id = createId();
    const customRecipe = await recipesDB
      .createRecipe({
        id,
        recipeName,
        servings,
        ingredients,
        method,
        selectedFile,
        duration,
      })
      .catch((error) => {
        console.log("creation error", error);
      });
    console.log(customRecipe);
    setRecipeObject({
      ...customRecipe,
      photo: URL.createObjectURL(customRecipe.photo),
    });
  };

  return {
    recipeObject,
    method,
    methodHandler,
    selectedFileHandler,
    servings,
    servingsHandler,
    duration,
    durationHandler,
    ingredients,
    ingredientsHandler,
    recipeName,
    recipeNameHandler,
    fileDataHandler,
    handleEditRecipe,
    editRecipe,
  };
};

export default useUploadCustom;
