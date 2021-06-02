import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Config from "../Config";
import { useHistory } from "react-router-dom";

const Preferences = (props) => {
 
  const history = useHistory();
  const [preferences, setPreferences] = useState([]);

  const checkedRadioButton = () => {
    return (
      (<Config isChecked={true} />),
      history.push("/config"),
      console.log("buttonchecked")
    );
  };

  const handlePreferencesInput = (event) => {
    setPreferences([...preferences, event.target.value]);
  };
  return (
    <div>
      <h2>Preferences</h2>
      <input
        type="checkbox"
        value="I don't have Preferences"
        onChange={handlePreferencesInput}
      />
      I don't have allergies
      <input type="checkbox" value="Nuts" onChange={handlePreferencesInput} />
      Nuts
      <input type="checkbox" value="Diary" onChange={handlePreferencesInput} />
      Diary
      <input type="checkbox" value="Gluten" onChange={handlePreferencesInput} />
      Gluten
      <input type="checkbox" value="Fish" onChange={handlePreferencesInput} />
      Fish
      <Button type="submit" onClick={checkedRadioButton}>
        Continue
      </Button>
      <div>
        {preferences.length > 0 ? (
          <div>
            {preferences.map((preference) => {
              return (
                <ul>
                  <li>{preference}</li>
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

export default Preferences;
