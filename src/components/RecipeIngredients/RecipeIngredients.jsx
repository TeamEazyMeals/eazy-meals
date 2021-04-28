import React from "react";
import uuid from "react-uuid";
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const RecipeIngredients = ({ ingredients }) => {

  return ingredients.map((ingredient) => {
     
    return (
      <>
        <List >
          <li key={uuid()}>
            {ingredient.name} {ingredient.amount} {ingredient.unit}
          </li>
        </List>
      </>
    );
  });
};
export default RecipeIngredients;
