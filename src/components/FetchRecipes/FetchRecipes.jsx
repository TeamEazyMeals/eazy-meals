import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import styled from "styled-components";
import Fuse from "fuse.js";
import SearchIcon from "@material-ui/icons/Search";
import Sort from "../SortRecipes/SortRecipes";

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
  const [recipeData, setRecipeData] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleSort = (e) => {
    setSortValue(e.target.value);
  
  };

  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();
 
    setRecipeData(data);
  };

  useEffect(() => getRecipeData(), []);
  const handleOnSearch = ({ target }) => {
    const { value } = target;
    setSearchItem(value);
  };

  if (!recipeData) {
    return <Title> Loading recipes.....</Title>;
  }

  const fuse = new Fuse(recipeData, {
    keys: ["name", "description"],
    minMatchCharLength: 3,
  });

  const results = fuse.search(searchItem);
  if (!results) {
    console.log("no results");
  }
  const searchResults =
    searchItem.length < 3 ? recipeData : results.map((result) => result.item);

  const compareFunction = (a, b) => {
    if (sortValue === "shortest time") {
      return parseInt(a.timeInMinutes) - parseInt(b.timeInMinutes);
    }
    if (sortValue === "longest time") {
      return parseInt(b.timeInMinutes) - parseInt(a.timeInMinutes);
    }
    if (sortValue === "a-z") {
      return a.name.toUpperCase() === b.name.toUpperCase()
        ? 0
        : a.name.toUpperCase() > b.name.toUpperCase()
        ? 1
        : -1;
    }
    if (sortValue === "z-a") {
      return b.name.toUpperCase() === a.name.toUpperCase()
        ? 0
        : b.name.toUpperCase() > a.name.toUpperCase()
        ? 1
        : -1;
    }
  };

  searchResults.sort(compareFunction);

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
