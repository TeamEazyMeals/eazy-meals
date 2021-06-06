import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import recipes from "../../api/app/indexedDB";
import { v4 as createId } from "uuid";

const useUploadCustom = () => {
  const [recipeName, setRecipeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [servings, setServings] = useState();
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");
  const [duration, setDuration] = useState("");
  const [uploading, setUploading] = useState(false);

  const history = useHistory();

  const recipeNameHandler = (e) => {
    setRecipeName(e.target.value);
    console.log(recipeName);
  };

  const servingsHandler = (e) => {
    setServings(e.target.value);
  };

  const durationHandler = (e) => {
    setDuration(e.value);
  };

  const selectedFileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const ingredientsHandler = (e) => {
    setIngredients(e.value);
  };

  const methodHandler = (e) => {
    setMethod(e.target.value);
  };
  const fileDataHandler = (e) => {
    e.preventDefault();
    const id =  createId();
  console.log(recipeName, servings, ingredients, method, duration);
    recipes.createRecipe(
     id,
      recipeName,
      servings,
      ingredients,
      method,
      duration,
    ).catch((error)=>{
      console.log("creation error", error)
    });

  };
  // const recipeObject = recipes.readRecipe();

  return {
    method,
    methodHandler,
    // recipeObject,
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
  };
};

export default useUploadCustom;
