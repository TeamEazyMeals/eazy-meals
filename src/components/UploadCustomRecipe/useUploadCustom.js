import React, { useState } from "react";
import { v4 as createId } from "uuid";
import recipesDB from "../../api/app/indexedDB";
import ReactFileReader from "react-file-reader";

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
  };

  const methodHandler = (e) => {
    setMethod(e.target.value);
  };

  const handleEditRecipe = () => {
    setEditRecipe(true);
  };
  const fileDataHandler = (e) => {
    e.preventDefault();
    const id = createId();

    recipesDB
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
  };

  const getRecipeObject = () => {
    return recipesDB
      .readRecipe("5925e4ba-896a-4034-a959-ef314b854889")
      .then((result) => {
        console.log(result);
        setRecipeObject({
          ...result,
          photo: URL.createObjectURL(result.photo),
        });
      });
  };
  console.log(recipeObject);

  return {
    getRecipeObject,
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
