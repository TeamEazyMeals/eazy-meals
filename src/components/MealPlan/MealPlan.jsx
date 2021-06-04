import React, { useState } from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { Button } from "@material-ui/core";

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
const Form = styled.label`
  top-padding: 8rem;
  top-margin: 9rem;
  botton-nargin: 4rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  && {
    top-padding: 50px;
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

`;


const MealPlan = () => {
  const [dayValue, setDayValue] = useState("");
  const [mealTypeValue, setMealTypeValue] = useState("");
  const handleDaySelect = (e) => {
    console.log(e.target.value);
    setDayValue(e.target.value);
  };

  const handleMealTypeSelect = (e) => {
    console.log(e.target.value);
    setMealTypeValue(e.target.value);
  };

  return (
    <div>
      <Header>Select Meal Plan</Header>
      <Container>
        <h2>Welcome Busi...</h2>
        <p> Please select your meal plan</p>
      </Container>

      <Form>
        <label for="days">
          Please select a day:
          <select id="dropdown" onChange={handleDaySelect}>
            <option value=""></option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </label>
        <br />
        <br />
        <label for="days">
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
          </div>
          </Wrapper>
        ) : (
          <p>Please select Meal Type and Day.</p>
        )}
      </Form>
      <StyledButton variant="contained" href="/allrecipes">
        Submit
      </StyledButton>
    </div>
  );
};

export default MealPlan;
