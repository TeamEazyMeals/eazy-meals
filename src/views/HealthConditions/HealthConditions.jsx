import React from "react"
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const HealthConditions = (props) => {
 
  const history = useHistory();
  const [healthconditions, setHealthConditions] = useState([]);

  const checkedRadioButton = () => {
    return (
      (<Config isChecked={true} />),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handleHealthConditionsInput = (event) => {
    setHealthConditions([...healthconditions, event.target.value]);
  };
  return (
    <div>
      <h2>Health Conditions</h2>
      <input
        type="checkbox"
        value="I don't have Health Conditions"
        onChange={handleHealthConditionsInput}
      />
      I don't have Heath Conditions
      <input type="checkbox" value="Asthma" onChange={handleHealthConditionsInput} />
      Asthma
      <input type="checkbox" value="Allergy" onChange={handleHealthConditionsInput} />
      Allergy
      <input type="checkbox" value="Headache" onChange={handleHealthConditionsInput} />
      Headache
      <input type="checkbox" value="Cancer" onChange={handleHealthConditionsInput} />
      Cancer
      <Button type="submit" onClick={checkedRadioButton}>
        Continue
      </Button>
      <div>
        {healthconditions.length > 0 ? (
          <div>
            {healthconditions.map((healthcondition) => {
              return (
                <ul>
                  <li>{healthcondition}</li>
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

export default HealthConditions;
