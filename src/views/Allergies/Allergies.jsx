import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const Allergies = (props) => {
  const history = useHistory();
  const [allergies, setAllergies] = useState({
    none:false,
    nuts: false,
    gluten:false,
    fish:false,
    dairy:false,
    
  });

  const checkedRadioButton = () => {
    return (
      (<Config isChecked={true} />),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handleAllergiesInput = (event) => {
    const { value } = event.target;
    if (
      value === "none" &&
      allergies.none
    ) {
      return setAllergies();
    }

    if (value === "I don't have allergies") {
      return setAllergies([value]);
    }

    setAllergies([...allergies, event.target.value]);
  };
  return (
    <div>
      <h2>Allergies</h2>
      <input
        selected={allergies.includes("I don't have allergies")}
        type="checkbox"
        value="I don't have allergies"
        onChange={handleAllergiesInput}
      />
      I don't have allergies
      <input
        selected={allergies.includes("Nuts")}
        type="checkbox"
        value="Nuts"
        onChange={handleAllergiesInput}
      />
      Nuts
      <input
        selected={allergies.includes("Diary")}
        type="checkbox"
        value="Diary"
        onChange={handleAllergiesInput}
      />
      Diary
      <input
        selected={allergies.includes("Gluten")}
        type="checkbox"
        value="Gluten"
        onChange={handleAllergiesInput}
      />
      Gluten
      <input
        selected={allergies.includes("Fish")}
        type="checkbox"
        value="Fish"
        onChange={handleAllergiesInput}
      />
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
