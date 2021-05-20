import React, { useState, useEffect } from "react";
import SetServings from "../../components/SetServings/SetServings";
import StepsSwiper from "../StepsSwiper/StepsSwiper";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import app from "../../api/app/app";
import cms from "../../api/cms/cms";

const GetRecipe = (props) => {
  const Body = styled.div`
    text-align: center;
  `;
  const Header = styled.header`
    background: #07393c;
    color: white;
    text-align: center;
  `;
  const Title = styled.h1`
    font-family: Arial, sans-serif;
    letter-spacing: -1px;
  `;
  const List = styled.ul`
    justify-content: center;
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
    line-hieght: 25px;
  `;
  const { id } = props;
  console.log(id);

  const [recipes, setrecipe] = useState([]);
  const [count, setCount] = useState(1);
  const [showrecipe, setShowRecipe] = useState(false);

  console.log(recipes);

  const getRecipe = async () => {
    if (app.calcIfShouldSync()) {
      const response = await cms.syncRecipes();
      setrecipe(response);
    }
    const response = JSON.parse(window.localStorage.getItem("recipes"));
    setrecipe(response);
    console.log(response);

    const foundRecipe = response.find((recipe) => recipe.id === id);
     setrecipe(foundRecipe);
    //   console.log(foundRecipe)
  };
  useEffect(() => getRecipe(), []);

  if (!recipes) {
    return <h1>loading......</h1>;
  }

  return (
    <>
      <Header>
        <Title>Eazy Meals</Title>
      </Header>
      <Body>
        <h1>{recipes.name}</h1>

      {recipes.photo &&<img src={recipes.photo} alt={recipes.photo} />}
        <h2>Description</h2>
        <h2>Time in Minutes:{recipes.timeInMinutes}</h2>
        <p>{recipes.description}</p>
        <h2>Set Servings</h2>
        <SetServings count={count} setCount={setCount} />

        <Button onClick={() => setShowRecipe(!showrecipe)}>ingredients</Button>
        {showrecipe && (
          <div>
            {recipes.ingredients.map((recp) => {
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

          {/* <StepsSwiper steps={recipe.steps} /> */}
        </div>
      </Body>
    </>
  );
};
const MockedApp = () => <GetRecipe id="ckoioil141axu0a09lbw6hfjw" />;

export default MockedApp;
