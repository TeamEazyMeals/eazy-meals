import React from "react";

const MealPlan = () => {
  return (
    <div>
      <h1>Welcome Busi...</h1>

      <p> Please select your meal plan</p>

      <form>
        <label for="days">Please select a day:</label>
        <select name="days">
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>

        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MealPlan;
