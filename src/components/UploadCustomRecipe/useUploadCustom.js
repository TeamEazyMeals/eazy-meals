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
  // const [uploading, setUploading] = useState(false);

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
      setSelectedFile(file)
  };



  const ingredientsHandler = (e) => {
    setIngredients(e.target.value);
  };

  const methodHandler = (e) => {
    setMethod(e.target.value);
  };
  const fileDataHandler = (e) => {
    e.preventDefault();
    console.log("hello")
    const id =  createId();
  console.log( selectedFile);
    recipesDB
      .createRecipe({ id, recipeName, servings, ingredients, method, selectedFile, duration })
      .catch((error) => {
        console.log("creation error", error);
      });

  };

  const recipeObj = recipesDB
    .readRecipe("b056903e-988a-4e20-b00c-85752a8e8a05")
    .then((result) => {
      return result;
    });
   

  return {
    recipeObj,
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
  };
};

export default useUploadCustom;
