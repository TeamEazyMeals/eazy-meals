import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Allergies from "../Allergies/Allergies";

const Config = (props) => {
  const { inputChecked } = props;

  const history = useHistory();

  return (
    <div>
      <label htmlFor="allergies"> Allergies</label>
      <input
        checked={inputChecked ? inputChecked : false}
        id="allergies"
        type="checkbox"
        value="allergies"
        onChange={() => {
          return (
            (<Allergies inputId={"allergies"} />),
            history.push("/config/allergies")
          );
        }}
      />
    </div>
  );
};
export default Config;
