import React from "react";
import uuid from "react-uuid";
import useFetchRecipes from "../FetchRecipes/useFetchRecipes";

const RecipeCategories = () => {
  const { searchResults } = useFetchRecipes();
console.log( searchResults,"gggggg")
  return (
    <>
      {searchResults.map(({ tags }) => {
        // const {name}= tags
        // console.log(tags)
        return (
          <>
            {Object.values(tags)
              .filter(recipeTag => recipeTag.name=== "chicken"
              )
              .map((recipename) => {
                return (
                  <div key={uuid()}>
                    <h1>chicken Recipes</h1>

                    <ul>
                      <li>{recipename}</li>
                    </ul>
                  </div>
                );
              })}
              {/* {Object.values(tags).forEach(val => console.log(val))} */}
          </>
        );
      })}
    </>
  );
};

export default RecipeCategories;