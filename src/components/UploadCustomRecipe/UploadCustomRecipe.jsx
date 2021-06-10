import React, { useState } from "react";
import EditRecipe from "./EditRecipe";
import UploadRecipe from "./UploadRecipe";
import useUploadCustom from "./useUploadCustom";
import ViewCustomRecipe from "./ViewCustomRecipe";

const UploadCustomRecipe = () => {
  const { recipeObject, editRecipe } = useUploadCustom();

  return recipeObject === "" ? (
    <UploadRecipe />
  ) : editRecipe ? (
    <EditRecipe />
  ) : (
    <ViewCustomRecipe />
  );
};

export default UploadCustomRecipe;
