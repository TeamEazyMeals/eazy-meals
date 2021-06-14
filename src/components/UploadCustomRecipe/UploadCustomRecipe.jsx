import React, { useEffect } from "react";
import EditRecipe from "./EditRecipe";
import UploadRecipe from "./UploadRecipe";
import useUploadCustom from "./useUploadCustom";
import ViewCustomRecipe from "./ViewCustomRecipe";

const UploadCustomRecipe = () => {
  
  const state = useUploadCustom();

  if (state.editRecipe && state.recipeObject != "") {
    return <EditRecipe {...state} />;
  }

  if (state.recipeObject === "") {
    return <UploadRecipe {...state} />;
  }

  return <ViewCustomRecipe {...state} />;
};

export default UploadCustomRecipe;
