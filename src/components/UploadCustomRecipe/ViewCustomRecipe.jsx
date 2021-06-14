import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f2f9;
`;
const Header = styled.h1`
  color: #34a853;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 900;
  line-height: 66px;
  letter-spacing: 0px;
  text-align: center;
`;
const Title = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: #34a853;
  text-align: center;
  margins: 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  && {
    padding: 1rem;
    height: 48px;
    width: 256px;
    border: 1px solid #34a853;
    color: #34a853;
    font-weight: 700;
    border-radius: 3px;
    background: rgba(52, 168, 83, 0.1);
  }
`;

const UL = styled.ul`
  list-style: none;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  width: 200px;
  hight: auto;
`;

const ViewCustomRecipe = ({...state }) => {

  return (

    <Wrapper>
      <h3> {state.recipeObject.name}</h3>
      <ImgWrapper>

        <StyledImage
          src={state.recipeObject.photo}
          alt="recipe image"
        ></StyledImage>

        <UL>
          <li>timeInMinutes: {state.recipeObject.timeInMinutes}</li>
          <li>serves: {state.recipeObject.serves}</li>
        </UL>

      </ImgWrapper>
      <h4>Ingredients</h4>
      <p> {state.recipeObject.ingredientList}</p>
      <h4>Steps</h4>
      <p> {state.recipeObject.steps}</p>
      <button onClick={state.handleEditRecipe}>Edit Recipe</button>
    </Wrapper>
  );
};

export default ViewCustomRecipe;
