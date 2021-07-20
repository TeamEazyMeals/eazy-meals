import { useState } from "react";
import { useMount, useToggle } from "react-use";
import { internalRecipes } from "../../api/cms/internalRecipes";
import { tags } from "../../api/tags/tags";

export const useRecipeCategories = () => {
  const [filterTags, setFilterTags] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useMount(async () => {
    const tagsResponse = await tags.read();
    setFilterTags(tagsResponse);
    console.log(await tags.read());
  });
  return {
    filterTags,
    recipes,
  };
};
export default useRecipeCategories;
