import React, { Fragment } from "react"
import FetchRecipes from "../FetchRecipes/FetchRecipes";
import uuid from "react-uuid";
import styled from "styled-components";



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

const RecipeCategories= ({tags}) => {
  if(tags!=[]){}
  return tags.map((tag) => {
    return (
      <Fragment key={uuid()}>
        <List>
          <li>
            {tag.name} {tag.amount} {tag.unit}
          </li>
        </List>
      </Fragment>
    );
  });
};
   
export default RecipeCategories;