import React from "react";

 const Goals = ()=>{

    return (
        <div>
          <h2>Goals</h2>
          <label for="name">Default Servings</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="4"
            maxLength="8"
            size="10"
          ></input>
          <br></br>
          <br></br>
          <button type="submit">View</button>
        </div>
      );
    }
    
 export default Goals