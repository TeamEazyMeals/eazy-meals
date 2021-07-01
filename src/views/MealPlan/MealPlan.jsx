import React, { useState, useEffect } from "react";
import { stringify } from "query-string";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import app from "../../api/app/app";
import cms from "../../api/cms/cms";
import { useParams, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import useFetchRecipes from "../../components/FetchRecipes/useFetchRecipes";

const Header = styled.h1`
  font-size: 64px;
  text-align: center;
  color: white;
  font: Robot;
  background: #34a853;
`;
const Container = styled.h2`
  text-align: center;
  font: Robot;
`;
const Form = styled.form`
  padding-top: 8rem;
  margin-top: 9rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  && {
    padding-top: 50px;
    height: 40px;
    width: 250px;
    border: 1px solid #34a853;
    color: #34a853;
    font-weight: 700;
    border-radius: 3px;
    float: center;
  }
`;
const Wrapper = styled.div`
  text-align: center;
`;

const MealPlan = () => {
  const history = useHistory();
  const [dayValue, setDayValue] = useState("");
  const [mealTypeValue, setMealTypeValue] = useState("");
  const { recipeId: id } = useParams();
  const [recipes, setrecipe] = useState([]);
  const [mealSelectValue, setMealSelect] = useState("");
  const {
    recipeData,
    searchItem,
    handleOnSearch,
    searchResults,
  } = useFetchRecipes();

  const getRecipe = async () => {
    if (app.calcIfShouldSync()) {
      const response = await cms.syncRecipes();
      setrecipe(response);
    }
    const response = JSON.parse(window.localStorage.getItem("recipes"));
    setrecipe(response);

    const foundRecipe = response.find((recipe) => recipe.id === id);
    setrecipe(foundRecipe);
  };
  useEffect(() => getRecipe(), []);

  const handleMealSelection = (e) => {
    setMealSelect(e.target.value);
  };
  const handleDaySelect = (e) => {
    console.log(e.target.value);
    setDayValue(e.target.value);
  };
  const handleMealTypeSelect = (e) => {
    console.log(e.target.value);
    setMealTypeValue(e.target.value);
  };


  if (!recipeData) {
    return <title> Loading recipes.....</title>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = stringify({ dayValue, mealTypeValue, mealSelectValue })
    history.push(`../../views/mealplan/addmealplantable?${query}`)
  }
  return (
    <div>
      <Header>Select Meal Plan</Header>
      <Container>
        <h2>Welcome</h2>
        <p> Please select your meal plan</p>
      </Container>
      <content>
        <div>
          <SearchIcon fontSize="small"></SearchIcon>
          <input
            type="text"
            value={searchItem}
            placeholder="search recipes.."
            onChange={handleOnSearch}
          />
        </div>
        <div key={id}>
          <select id="dropdown" onChange={handleMealSelection}>
            {searchResults.map(({ id, name }) => (
              <option key={id}>{name}
              </option>
            ))}
          </select>
        </div>
      </content>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="days">
          Please select a day:
          <select id="dropdown" onChange={handleDaySelect}>
            <option value=""></option>
            <option value="sun">Sunday</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
          </select>
        </label>

        <label htmlFor="days">
          Please select a Type:
          <select id="dropdown" onChange={handleMealTypeSelect}>
            <option value=""></option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </label>

        {mealTypeValue === "" ? (
          <b></b>
        ) : dayValue !== "" ? (
          <Wrapper>
            <div>
              <b>Selected Meal Type: {mealTypeValue}</b> <br></br>
              <b>Selected Day:{dayValue}</b>
              <br />
            </div>
          </Wrapper>
        ) : (
          <p>Please select Meal Type and Day.</p>
        )}
        {mealSelectValue !== "" ? (
          <Wrapper>
            <b>Selected meal : {mealSelectValue}</b>
          </Wrapper>
        ) : (<p>Please select a meal</p>)}

        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </Form>
    </div>
  );
};

export default MealPlan;
