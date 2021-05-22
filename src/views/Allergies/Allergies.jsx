import React from "react";
import Radio from "@material-ui/core/RadioGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


 const Allergies = ()=>{
    
 const [value, setValue] = React.useState('allergies');

const handleChange = (event) => {
    setValue(event.target.value);
};
return (
<div>
  <h2>Allergies</h2>
  <label for="name">Default Servings</label>
  <br></br>
  <input
    type="text"
    id="name"
    name="name"
    required
    minLength="4"
    maxLength="8"
    size="10"
  ></input>
  <br></br>
  <br></br>
  <FormControl component="fieldset">
      <FormLabel component="legend">YourFamily</FormLabel>
      <RadioGroup aria-label="family" name="family1" value={value} onChange={handleChange}>
          <FormControlLabel value="allergies" control={<Radio />} label="Add Allergies" />
          <FormControlLabel value="health condition" control={<Radio />} label="Add Health Condition" />
          <FormControlLabel value="preferences" control={<Radio />} label="Add Preferences" />
          <FormControlLabel value="goals" control={<Radio />} label="Add Goals" />

      </RadioGroup>

  </FormControl>

  <br></br>
  <br></br>
  <button type="submit">Continue</button>
</div>
);
}
     
 
 export default Allergies