import React from "react";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Sort from "../SortRecipes/SortRecipes";
import useFetchRecipes from "./useFetchRecipes";
// import SearchBar from "../SearchBar/SearchBar";
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

const FetchRecipes = () => {
  const {
    recipeData,
   searchItem,
   handleOnSearch,
    handleSort,
    searchResults,
  } = useFetchRecipes();

  if (!recipeData) {
    return <Title> Loading recipes.....</Title>;
  }

  return (
    <Content>
      <Title>eazy-meals</Title>

      <div>
        <SearchIcon fontSize="small"></SearchIcon>
        <input
          type="text"
          value={searchItem}
          placeholder="search recipes.."
          onChange={handleOnSearch}
        />
        {/* <SearchBar/> */}
        <Sort handleSort={handleSort}></Sort>
      </div>

      {searchResults.map(
        ({ id, name, imageUrl, ingredients, description, timeInMinutes }) => {
          return (
            <div key={id}>
              <Title3>All Recipes</Title3>
              <List>
                <li>
                  <Title>{name}</Title>
                </li>
                <li>
                  <Image src={imageUrl} alt={name} />
                </li>
                <h4>Time in minutes:{timeInMinutes}</h4>

                <RecipeIngredients ingredients={ingredients} />
                <Title>Method</Title>
                <li>{description}</li>
              </List>
            </div>
          );
        }
      )}
    </Content>
  );
};
export default FetchRecipes;