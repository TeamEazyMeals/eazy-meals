import React, { useEffect } from "react";
import EditRecipe from "./EditRecipe";
import UploadRecipe from "./UploadRecipe";
import useUploadCustom from "./useUploadCustom";
import ViewCustomRecipe from "./ViewCustomRecipe";

const UploadCustomRecipe = () => {
  const state = useUploadCustom();
  console.log(state,"state")

useEffect(()=>console.log(state.recipeObject),[state.recipeObject])
  if (state.editRecipe && state.recipeObject != "") {
    return <EditRecipe {...state} />;
  }

  if (state.recipeObject === "") {
    return <UploadRecipe {...state} />;
  }

  return <ViewCustomRecipe {...state} />;
};

export default UploadCustomRecipe;
