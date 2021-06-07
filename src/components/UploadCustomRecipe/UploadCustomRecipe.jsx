import React, { useEffect } from "react";
import useUploadCustom from "./useUploadCustom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import recipesDB from "../../api/app/indexedDB"

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


const UploadCustomRecipe = () => {
  

  const {
    recipeObj,
    method,
    methodHandler,
    selectedFileHandler,
    servings,
    duration,
    durationHandler,
    servingsHandler,
    ingredients,
    ingredientsHandler,
    recipeName,
    recipeNameHandler,
    fileDataHandler,
  } = useUploadCustom();

      console.log(typeof recipeObj);
       console.log(Array.isArray(recipeObj));
       useEffect(() => {
         console.log("recipeObjrender",recipeObj);
       }, [recipeObj]);
       
  return (

    <>
    
      {!localStorage.getItem("customRecipe") && (
        <Wrapper>
          
          <Form name="uploadCustomRecipe" onSubmit={fileDataHandler}>
            <Header> Upload Custom Recipe</Header>

            <Input
              type="text"
              placeholder="recipe name"
              value={recipeName}
              onChange={recipeNameHandler}
            />
            <Title>UPLOAD RECIPE PHOTO</Title>

            <Input
              type="file"
              accept="image/*, file"
              onChange={selectedFileHandler}
            />

            <label htmlFor="servings">Number of servings</label>
            <Input
              type="number"
              min="1"
              max="20"
              id="servings"
              value={servings}
              onChange={servingsHandler}
            />

<label htmlFor="duration">Time in minutes</label>
             <Input
              type="number"
              min="1"
              max="20"
              id="duration"
              value={duration}
              onChange={durationHandler}
            />

            <label htmlFor="ingredents">Ingredients</label>
            <Input
              type="textField"
              id="ingredients"
              value={ingredients}
              onChange={ingredientsHandler}
            />

            <label htmlFor="method">Method</label>
            <Input
              type="textField"
              id="method"
              value={method}
              onChange={methodHandler}
            />
            <StyledButton type="submit">
              Upload Recipe
            </StyledButton>
          </Form>
        </Wrapper>
      )}

      {recipeObj!==undefined &&(
        <div>
          {Object.keys(recipeObj).map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.serves}</li>
                <li>{item.photo}</li>
                <li>{item.ingredients}</li>
                <li>{item.method}</li>
              </ul>
            );
          })}
          {/* <StyledButton href="/findrecipes/uploadcustomrecipe">
            Edit Recipe
          </StyledButton> */}
        </div>
      )}
    </>
  );
};

export default UploadCustomRecipe;
