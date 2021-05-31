import React, { useState } from "react";
import { Dropdown } from "react-dropdown";

const MealPlan = (props) => {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  
  return (
    <div>
      <h1>Welcome Busi...</h1>

      <p> Please select your meal plan</p>

      <form>
        <label for="days">Please select a day:</label>

        <select id="dropdown" onChange={handleSelect}>
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
        <select id="dropdown" onChange={handleSelect}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MealPlan;
