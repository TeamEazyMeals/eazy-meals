import React, { useState, useEffect } from "react";
import SetServings from "../../components/SetServings/SetServings";

import styled from "styled-components";

import app from "../../api/app/app";
import cms from "../../api/cms/cms";
import { useParams } from "react-router-dom";

const Body = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background: #07393c;
  color: white;
  text-align: center;
`;
const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Button = styled.button`
color: white;
background: #07393c;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 1px solid black;
border-radius: 3px;
text-transform uppercase;
`;
const Text = styled.p`
  line-hieght: 25px;
`;
const AddRecipeToMealPlan = () => {
  const { recipeId: id } = useParams();
  const [recipes, setRecipe] = useState([]);
  const [count, setCount] = useState(1);
  const [mealTypeValue, setmealTypeValue] = useState([]);
  const [dayValue, setDayValue] = useState([]);
  const getRecipe = async () => {
    if (app.calcIfShouldSync()) {
      const response = await cms.syncRecipes();
      setRecipe(response);
    }
    const response = JSON.parse(window.localStorage.getItem("recipes"));
    setRecipe(response);

    const foundRecipe = response.find((recipe) => recipe.id === id);
    setRecipe(foundRecipe);
  };
  useEffect(() => getRecipe(), []);

  if (!recipes) {
    return <h1>loading......</h1>;
  }
  
  return (
    <React.Fragment>
      <div>
        <h1>Plan selected</h1>
        {/* <SetMeal mealTypeValue={mealTypeValue} setMealTypeValue={setmealTypeValue} /> */}

        <h3>Set Servings</h3>
        <SetServings count={count} setCount={setCount} />
        <button variant="contained" href="/">
        Confirm submission
      </button>
      </div>
    </React.Fragment>
  );
};
export default AddRecipeToMealPlan;
