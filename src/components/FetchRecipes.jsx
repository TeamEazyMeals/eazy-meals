import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
const FetchRecipes = () => {
  const [recipeData, setRecipeData] = useState(null);
  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();
    console.log({ data });
    //  alert(data);
    setRecipeData(data);
  };
  useEffect(() => getRecipeData(), []);
  if (!recipeData) {
    return <h1> Loading.....</h1>;
  }
  return (
    <div>
      {recipeData.map(({name,image,ingredients,description}) => {
        //   console.log({ recipe });
        return (
          <ul>
            <li key={uuid()}>{name}</li>
            <li key={uuid()}>{image}</li>
            <li key={uuid()}>{ingredients.map(({name,amount,unit})=>{
               return (
                 <ul>
                   <li key={uuid()}>{name}</li>
                   <li key={uuid()}>{amount}</li>
                   <li key={uuid()}>{unit}</li>
                 </ul>
               );
               
            })
            
            }</li>
            <li key={uuid()}>{description}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default FetchRecipes;
