import React, { useEffect, useState} from "react";

const FetchRecipes = () => {

const [recipeData, setRecipeData] = useState(null);

  const getRecipeData = async () => {
    const response = await fetch("/data/RecipeData.json");
    const data = await response.json();
    console.log(data);
    setRecipeData(data);
  };

    const useEffect = (() => getRecipeData(),[]);

if(!recipeData){
    return <h1> Loading.....</h1>
}else{
    return(
        recipeData.map((recipe)=>{


<ul>
  <li>{recipe.name}</li>
  <li>{recipe.image}</li>
  <li>{recipe.ingredients}</li>
  <li>{recipe.description}</li>
</ul>;
    })
    )}
    
};
export default FetchRecipes;