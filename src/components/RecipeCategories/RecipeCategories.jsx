import React from "react";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import styled from "styled-components";
import useFetchRecipes from "../FetchRecipes/useFetchRecipes";


const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const Title3 = styled.h3`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const List = styled.ul`
  list-style: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 10%;
  height: auto;
`;

const RecipeCategories= () => {
  const {
    recipeData,
    searchItem,
    handleOnSearch,
    handleSort,
    searchResults,
  } = useFetchRecipes();
  // console.log (searchResults)
  
 
  if (!recipeData) {
    return <Title> Loading recipes.....</Title>;
  
  }

  return(
  <>
  
  {searchResults.map(
        ({ id, name, photo, ingredients, description, timeInMinutes }) => {
          return (
            <div key={id}>
              <Title3>All Recipes</Title3>
              <List>
                <li>
                  <Title>
                    <a href={`/allrecipes/${id}`}>{name}</a>
                  </Title>
                </li>
                <li>{photo && <Image src={photo} alt={name} />}</li>
                <h4>Time in minutes:{timeInMinutes}</h4>

                <RecipeIngredients ingredients={ingredients} />
                <RecipeCategories ingredients={ingredients}/>
                <Title>Method</Title>
                <li>{description}</li>
              </List>
            </div>
          );
        }
      )}
    </>
  

  ) 
};
export default RecipeCategories;