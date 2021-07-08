import React from "react";
import uuid from "react-uuid";
import useFetchRecipes from "../FetchRecipes/useFetchRecipes";

const RecipeCategories = () => {
  const { searchResults } = useFetchRecipes();

  return (
    <>
      {searchResults.map(({ tags }) => {
        console.log(tags)
        return (
          <>
            {Object.values(tags)
              .filter(recipeTag => recipeTag.name === "chicken"
              )
              .map((recipename) => {
                return (
                  <div key={uuid()}>
                    <h1>chicken Recipes</h1>

                    <ul>
                      <li>{recipe}</li>
                    </ul>
                  </div>
                );
              })}
          </>
        );
      })}
    </>
  );
};

export default RecipeCategories;