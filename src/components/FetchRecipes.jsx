import React, { useEffect, useState } from "react";

const FetchRecipes = () => {
  const [recipeData, setRecipeData] = useState(null);

  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();
    console.log(data);
    //  alert(data);
    setRecipeData(data);
  };

   useEffect (() => getRecipeData(), []);


  if (!recipeData) {
    return <h1> Loading.....</h1>;
  } 
    return (
      
      <div>
        <h1>RECIPES</h1>  
        {
        recipeData.map((recipe) => {
          <ul>
            <li key={recipe.id}>{recipe.name}</li>
            <li key={recipe.id}>{recipe.image}</li>
            <li key={recipe.id}>{recipe.ingredients}</li>
            <li key={recipe.id}>{recipe.description}</li>
          </ul>;
        })}
      </div>
    );
  
};
export default FetchRecipes;
