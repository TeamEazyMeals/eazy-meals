import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const Allergies = (props) => {
  const history = useHistory();
  const [allergies, setAllergies] = useState([]);

  const checkedRadioButton = () => {
    return (
      (<Config isChecked={true} />),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handleAllergiesInput = (event) => {
    const selectedAllergy = event.target.value;
    console.log(selectedAllergy);
    const isAllergy = [...allergies].find(
      (allergy) => {return allergy === selectedAllergy}
    );
console.log(isAllergy);
    if (isAllergy === undefined) {
      setAllergies([...allergies], selectedAllergy);
      console.log(allergies);
    }
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
