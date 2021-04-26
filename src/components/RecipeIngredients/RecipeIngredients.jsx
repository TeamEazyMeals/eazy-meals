import React from "react";
import { v4 as uuidv4 } from "uuid";
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
       
        <List key={uuidv4()}>
          <li>
            {ingredient.name} {ingredient.amount} {ingredient.unit}
          </li>
        </List>
      </>
    );
  });
};
export default RecipeIngredients;
