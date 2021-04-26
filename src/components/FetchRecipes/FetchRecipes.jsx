import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients"
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar"

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
  height:auto;
`;
const Button = styled.button`
  color: white;
  background: #07393c;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 3px;
  text-transform: uppercase;
`;

const FetchRecipes = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [showrecipe, setShowRecipe] = useState(false);

  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();
    console.log({ data });
    //  alert(data);
    setRecipeData(data);
  };
  useEffect(() => getRecipeData(), []);
  if (!recipeData) {
    return <Title> Loading.....</Title>;
  }
  return (
    <Content>
      {recipeData.map(({name,imageUrl,ingredients,description, timeInMinutes}) => {
      
        return (
          <div>
           <Title>eazy-meals</Title>
           <SearchBar recipeData={recipeData}>
           </SearchBar>
            <Title3>All Recipes</Title3>
          <List>
            <li key={uuid()}>
              <Title>{name}</Title>
            </li>
            <li key={uuid()}>
              <Image src={imageUrl} alt={name} />
            </li>
            <h4>Time in minutes:{timeInMinutes}</h4>

            <Button onClick={() => setShowRecipe(!showrecipe)}>
              Show Ingredients
            </Button>
            {showrecipe && (<RecipeIngredients ingredients={ingredients} />)}
            <Title>Method</Title>
            <li key={uuid()}>{description}</li>
          </List>
          </div>
        );
      })}
    </Content>
  );
};
export default FetchRecipes;
