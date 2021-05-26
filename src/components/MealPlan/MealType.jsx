import React from 'react';

const MealType = () => {
    return (
      <div>
        <h1>Welcome Busi...</h1>
  
        <p> Please select your meal Type</p>
  
        <form>
          <label for="days">Please select a Type:</label>
          <select name="type">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
  
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
  

export default MealType;