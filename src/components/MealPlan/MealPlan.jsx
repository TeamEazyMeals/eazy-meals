import React, { useState } from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { Button } from "@material-ui/core"
 
const Header = styled.h1`
  font-size: 64px;
  text-align: center;
  color: white;
  font: Robot;
  background: #34a853;
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
      <h1>Select Meal Plan</h1>
      <h2>Welcome Busi...</h2>
      <p> Please select your meal plan</p>
      <form>
        <label for="days">Please select a day:</label>

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
        <br />

        <label for="days">Please select a Type:</label>
        <select id="dropdown" onChange={handleMealTypeSelect}>
        <option value=""></option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>

      
        {mealTypeValue === "" ? (
        <b></b>
      ) : dayValue !== "" ? (
        <div>
          <b>Selected Meal Type: {mealTypeValue}</b> <br></br>
          <b>Selected Day:{dayValue}</b>
        </div>
      ) : (
        <p>Please select Meal Type and Day.</p>
      )}
      
      </form>
      <Button variant="contained" href="/allrecipes">
            Submit
          </Button>

    </div>
  );
};

export default MealPlan;
