import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const Goals = (props) => {
 
  const history = useHistory();
  const [goals, setGoals] = useState([]);

  const checkedRadioButton = () => {
    return (
      (<Config isChecked={true} />),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handleGoalsInput = (event) => {
    setGoals([...goals, event.target.value]);
  };
  return (
    <div>
      <h2>Goals</h2>
      <input
        type="checkbox"
        value="I don't have Goals"
        onChange={handleGoalsInput}
      />
      I don't have goals
      <input type="checkbox" value="Weight Loss" onChange={handleGoalsInput} />
      Weight Loss
      <input type="checkbox" value="Healthy Eating" onChange={handleGoalsInput} />
      Healthy Eating
      <input type="checkbox" value="Fitness" onChange={handleGoalsInput} />
      Fitness
      <input type="checkbox" value="Healthy breakfast" onChange={handleGoalsInput} />
      Health Breakfast
      <Button type="submit" onClick={checkedRadioButton}>
        Continue
      </Button>
      <div>
        {goals.length > 0 ? (
          <div>
            {goals.map((goal) => {
              return (
                <ul>
                  <li>{goal}</li>
                </ul>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Goals;
