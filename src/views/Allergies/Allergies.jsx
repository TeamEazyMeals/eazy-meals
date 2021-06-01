import React from "react";
import { useState } from "react";

const Allergies = () => {
  const [allergies, setAllergies] = useState([]);

  console.log(Array.isArray(allergies));

  const handleAllergiesInput = (event) => {
    //console.log(event.target.value);
    console.log(Array.isArray(allergies));
    //console.log(typeof allergies, allergies);
    setAllergies(allergies.push(event.target.value));

    //console.log(allergies);
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
      <button type="submit">Continue</button>
      {/* <div>
        {(allergies.length > 0) ? (
          <div>
            {allergies.map((allergy) => {
              return (
                <ul>
                  <li>{allergy}</li>
                </ul>
              );
            })}
          </div>
        // ) : (
        //   <div>*********HLOSANI*********</div> */}
      {/* // )} */}
      {/* </div> */}
    </div>
  );
};

export default Allergies;
