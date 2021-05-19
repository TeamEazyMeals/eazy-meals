import React, { useState, useEffect } from "react";
import SetServings from "../../components/SetServings/SetServings";
import StepsSwiper from "../StepsSwiper/StepsSwiper"
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";



const GetRecipe = (props) => {
  const Body = styled.div`
    text-align:center;
  `;
  const Header = styled.header`
    background:#07393c;
    color: white;
    text-align:center;
  `;
  const Title = styled.h1`
    font-family: Arial, sans-serif;
    letter-spacing: -1px;
  `;
  const List = styled.ul`
    justify-content:center;
  `;
  const Button = styled.button`
    color: white;
    background: #07393c;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid black;
    border-radius: 3px;
    text-transform uppercase;
  `;
  const Text = styled.p`
    line-hieght:25px;
  `;
  const { id } = props;

  //console.log(props);
  const [recipe, setRecipe] = useState(null);
  const [count, setCount] = useState(1);
  const [showrecipe, setShowRecipe] = useState(false);
  
  console.log(recipe)

  const getRecipe = async () => {
    const response = await fetch("/data/recipeData.json");
    const result = await response.json();
    //console.log(result);
    const foundRecipe = result.find((recipe) => recipe.id === id);
    setRecipe(foundRecipe);
    //console.log(foundRecipe);
  };
  useEffect(() => getRecipe(), []);

  if (!recipe) {
    return <h1>loading......</h1>;
  }

  return (
    <>
      <Header>
        <Title>Eazy Meals</Title>
      </Header>
      <Body>
        <h1>{recipe.name}</h1>

        <img src={recipe.imageUrl} alt={recipe.imageUrl} />
        <h2>Description</h2>
        <h2>Time in Minutes:{recipe.timeInMinutes}</h2>
        <p>{recipe.description}</p>
        <h2>Set Servings</h2>
        <SetServings count={count} setCount={setCount} />

        <Button onClick={() => setShowRecipe(!showrecipe)}>ingredients</Button>
        {showrecipe && (
          <div>
            {recipe.ingredients.map((recp) => {
              return (
                <ul key={uuidv4()}>
                  <span>{recp.name} </span> {recp.amount * count}
                  {recp.unit}
                </ul>
              );
            })}
          </div>
        )}
        <div>
          <h2>Steps</h2>
         
        <StepsSwiper steps={recipe.steps}/>
         
        </div>
      </Body>
    </>
  );
};
const MockedApp = () => <GetRecipe id="c9e81d9a-778d-41bc-a4cf-7a1c0a12d1c0" />;

export default MockedApp;
