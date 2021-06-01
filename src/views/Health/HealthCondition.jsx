import React, { useState } from "react";
 


function Form(props) {
  const [name, setName] = useState("");


  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
         Health Condition
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>

      <div>
    <input type="checkbox" value="I don't have any health condition" name="allergies" /> I don't have any health condition
    <br></br>
        <input type="checkbox" value="Heart disease" name="health" /> Heart disease
        <br></br>
        <input type="checkbox" value="High blood pressure" name="health" /> High blood pressure
        <br></br>
        <input type="checkbox" value="Stroke" name="health" /> Stroke
        <br></br>
        <input type="checkbox" value="Type 2 Diabetes" name="health" /> Type 2 Diabetes

      </div>


    </form>

    
  );
}

export default Form;