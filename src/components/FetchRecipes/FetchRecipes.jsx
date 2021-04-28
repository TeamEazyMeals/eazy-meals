import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import styled from "styled-components";
import Fuse from "fuse.js";

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

  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();
    console.log({ data });
    setRecipeData(data);
  };

  useEffect(() => getRecipeData(), []);
  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setSearchItem(value);
  };

  if (!recipeData) {
    return <Title> Loading.....</Title>;
  }

  const fuse = new Fuse(recipeData, {
    keys: ["name", "ingredients", "description", "timeInMinutes", "imageURL"],
    includeScore: true,
  });

  const results = fuse.search(searchItem);
  console.log({ results });
  if (!results) {
    console.log("no results");
  }
  const searchResults = results.map(result => result.item)
  

  return (
    <Content>
      <Title>eazy-meals</Title>
     
      <div>
        <label>search</label>
        <input type="text" value={searchItem} onChange={handleOnSearch} />
      </div>
      <Title3>All Recipes</Title3>
      {searchResults.map(
        ({ name, imageUrl, ingredients, description, timeInMinutes }) => {
          return (
            <div>
              <List>
                <li key={uuid()}>
                  <Title>{name}</Title>
                </li>
                <li key={uuid()}>
                  <Image src={imageUrl} alt={name} />
                </li>
                <h4>Time in minutes:{timeInMinutes}</h4>
                console.log({ingredients})
                <RecipeIngredients ingredients={ingredients} />
                <Title>Method</Title>
                <li key={uuid()}>{description}</li>
              </List>
            </div>
          );
        }
      )}
    </Content>
  );
};
export default FetchRecipes;
