import React, { useState, useEffect } from "react";
import { Button, Checkbox } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CONFIG_MAP = {
  allergies: {
    id: "allergies",
    title: "Allergies",
    options: {
      none: {
        id: "none",
        title: "No Allergies",
        reset: true,
      },
      fish: {
        id: "fish",
        title: "Fish",
      },
      gluten: {
        id: "gluten",
        title: "Gluten",
      },
      dairy: {
        id: "dairy",
        title: "Dairy",
      },
      nuts: {
        id: "nuts",
        title: "Nuts",
      },
    },
  },
  healthConditons: {
    id: "healthConditions",
    title: "Health Conditions",
    options: {
      none: {
        id: "none",
        title: "No Health Condtions",
        reset: true,
      },

      diabetes: {
        id: "diabetes",
        title: "Diabetes",
      },
      cancer: {
        id: "cancer",
        title: "Cancer",
      },
      "heart-conditions": {
        id: "heart-conditions",
        title: "Heart Condtions",
      },
    },
  },
  preferences: {
    id: "preferences",
    title: "Preferences",
    options: {
      none: {
        id: "none",
        title: "No Preferences",
        reset: true,
      },
      "low-carb": {
        id: "low-carb",
        title: "Low-Carb",
      },
      vegan: {
        id: "vegan",
        title: "Vegan",
      },
      keto: {
        id: "keto",
        title: "Keto",
      },
      pescatarian: {
        id: "pescatarian",
        title: "Pescatarian",
      },
    },
  },
  goals: {
    id: "goals",
    title: "Goals",
    options: {
      none: {
        id: "none",
        title: "No Goals",
        reset: true,
      },
      "lose-weight": {
        id: "lose-weight",
        title: "Lose-Weight",
      },
      "health-eating": {
        id: "health-eating",
        title: "Health-Eating",
      },
      "gain-weight": {
        id: "gain-weight",
        title: "Gain-weight",
      },
    },
  },
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
/* Styled Components*/
const ButtonWrap = styled.div`
  padding: 0.5rem;
`;
/* Helper functions */

const createIntialObj = (obj) =>
  Object.keys(obj.options).reduce(
    (result, key) => ({
      ...result,
      [key]: false,
    }),
    {}
  );

const isValidSelections = (obj) => {
  if (obj.none) return true;

  const allSelections = Object.values(obj);
  const trueSelections = allSelections.filter((value) => value === true);
  return trueSelections.length > 0;
};

const createAction = (stateObj, setter) => (id, reset) => {

  if (stateObj.none && !reset) {
    setter({
      ...stateObj,
      [id]: !stateObj[id],
      none: false,
    });
    return;
  }
}

   if (!stateObj.none && reset) {

     setter({
       ...Object.values(stateObj).reduce(
         (result, key) => ({
           ...result,
          [key]: false,
        }),
      {}
      ),
       [id]: !stateObj[id],
       none: true,
     });
     return;
   }


  setter({
    ...stateObj,
    [id]: !stateObj[id],
    none: false,
  });


  /*Values*/

  const localString = window.localStorage.getItem("config");

  const createBlankValues = () => ({
    allergies: createIntialObj(CONFIG_MAP.allergies),
    healthConditions: createIntialObj(CONFIG_MAP.healthConditions),
    preferences: createIntialObj(CONFIG_MAP.preferences),
    goals: createIntialObj(CONFIG_MAP.goals),
  });

  const initialValues = localString
    ? JSON.parse(localString)
    : createBlankValues();

  const Config = () => {
    const [open, setOpen] = useState(null);

    const [allergies, setAllergies] = useState(initialValues.allergies);
    const [healthConditions, setHealthConditions] = useState(
      initialValues.healthConditions
    );
    const [preferences, setPreferences] = useState(initialValues.preferences);
    const [goals, setGoals] = useState(initialValues.goals);

    const selections = {
      allergies,
      preferences,
      goals,
      healthConditions,
    };

    useEffect(() => {
      window.localStorage.setItem("config", JSON.stringify(selections));
    }, [allergies, preferences, goals, healthConditions]);

    const actions = {
      allergies: createAction(allergies, setAllergies),

      preferences: createAction(preferences, setPreferences),

      goals: createAction(goals, setGoals),

      healthConditons: createAction(healthConditions, setHealthConditions),
    };

    const validSelections = {
      allergies: isValidSelections(allergies),
      healthConditions: isValidSelections(healthConditions),
      preferences: isValidSelections(preferences),
      goals: isValidSelections(goals),
    };

    if (open) {
      const resets = Object.values(CONFIG_MAP[open].options).filter(
        (item) => item.reset === true
      );

      const nonResets = Object.values(CONFIG_MAP[open].options).filter(
        (item) => item.reset !== true
      );

      return (
        <div>
          <h1>{CONFIG_MAP[open].title}</h1>

          {resets.map(({ id, title }) => (
            <div key={id}>
              <label htmlFor={id}>
                <Checkbox
                  id={id}
                  checked={Boolean(selections[open][id])}
                  onClick={() => actions[open](id, true)}
                />
                <span>{title}</span>
              </label>
            </div>
          ))}

          <hr />

          {nonResets.map(({ id, title }) => (
            <div key={id}>
              <label htmlFor={id}>
                <Checkbox
                  id={id}
                  checked={Boolean(selections[open][id])}
                  onClick={() => actions[open](id)}
                />
                <span>{title}</span>
              </label>
            </div>
          ))}

          <Button variant="contained" onClick={() => setOpen(null)}>
            Continue
          </Button>
        </div>
      );
    }

    return (
      <div>
        <h1>Config</h1>

        {Object.values(CONFIG_MAP).map(({ id, title }) => (
          <ButtonWrap key={id}>
            <Checkbox
              checked={Boolean(selections[open][id])}
              onChange={console.log}
            />

            <Button variant="contained" onClick={() => setOpen(id)}>
              Add {title}
            </Button>
          </ButtonWrap>
        ))}

        <Button
          variant="contained"
          disabled={
            Object.values(validSelections).filter((value) => value === false)
              .length > 0
          }>
          Save Config
        </Button>
      </div>
    );
  };


export default Config;
