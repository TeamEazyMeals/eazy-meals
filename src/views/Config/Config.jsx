import React from "react";
import { Button } from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom"

const Config = () => {

 

  const history = useHistory();
  
  return (
    <div>
      <label htmlFor="allergies"> Allergies</label>
      <input
        type="radio"
        value="allergies"
        id="allergies"
        onChange={()=>history.push("/config/allergies")}
        
      />

     
    </div>
  );
};
export default Config;
