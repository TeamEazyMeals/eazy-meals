import { useState } from "react";
import { useMount, useToggle } from "react-use";
import { internalRecipes } from "../../api/cms/internalRecipes";
import { tags } from "../../api/tags/tags";

export const useRecipeCategories = () => {
  const [filterTags, setFilterTags] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useMount(async () => {
    
    console.log(await internalRecipes.read('ckr57vb68a78c0c59quzekr2d'));
    const tagsResponse = await tags.read();
    setFilterTags(tagsResponse.sort((a,b)=> a.name.localeCompare(b.name)));
    
  });
  return {
    filterTags,
    recipes,
  };
};
export default useRecipeCategories;
