import React, { useEffect } from "react";
import EditRecipe from "./EditRecipe";
import UploadRecipe from "./CreateOwnRecipe";
import useUploadCustom from "./useUploadCustom";
import ViewCustomRecipe from "./ViewCustomRecipe";

const UploadCustomRecipe = () => {
  const { recipeObject, editRecipe, getRecipeObject ,getEditRecipe} = useUploadCustom();
  
  useEffect(() => {
     getRecipeObject();
  },[]);
   useEffect(() => {
     getEditRecipe();
   }, []);
  
 console.log(editRecipe,29);
  return (
    <div>
      {recipeObject === "" ? (
        <UploadRecipe />
      ) : editRecipe ? (
        <EditRecipe />
      ) : (
        <ViewCustomRecipe />
      )}
      ;
    </div>
  );
};

export default UploadCustomRecipe;
