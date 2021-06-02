import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const Allergies = (props) => {
  const { inputId } = props;
  const history = useHistory();
  const [allergies, setAllergies] = useState([]);

  const checkedRadioButton = () => {
    return (
      (<Config inputChecked={true}></Config>),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handleAllergiesInput = (event) => {
    setAllergies([...allergies, event.target.value]);
  };
  return (
    <div>
      <h2>Allergies</h2>
      <input
        type="checkbox"
        value="I don't have allergies"
        onChange={handleAllergiesInput}
      />
      I don't have allergies
      <input type="checkbox" value="Nuts" onChange={handleAllergiesInput} />
      Nuts
      <input type="checkbox" value="Diary" onChange={handleAllergiesInput} />
      Diary
      <input type="checkbox" value="Gluten" onChange={handleAllergiesInput} />
      Gluten
      <input type="checkbox" value="Fish" onChange={handleAllergiesInput} />
      Fish
      <Button type="submit" onClick={checkedRadioButton}>
        Continue
      </Button>
      <div>
        {allergies.length > 0 ? (
          <div>
            {allergies.map((allergy) => {
              return (
                <ul>
                  <li>{allergy}</li>
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

export default Allergies;
