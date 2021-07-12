import React, { useState, useEffect } from "react";
import SetServings from "../../components/SetServings/SetServings";
import StepsSwiper from "../StepsSwiper/StepsSwiper";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import app from "../../api/app/app";
import cms from "../../api/cms/cms";
import { useParams } from "react-router-dom";

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

const OfflineDiv = styled.div`
  padding-left: 10%;
  color: #9f6000;
  background-color: #feefb3;
`;
const GetRecipe = () => {
  const { recipeId: id } = useParams();
  const [recipes, setRecipe] = useState([]);
 const [mode, setMode] = useState("online");
  const [count, setCount] = useState(1);
  const [showrecipe, setShowRecipe] = useState(false);

  const getRecipe = async () => {
    if (app.calcIfShouldSync()) {
      const response = await cms.syncRecipes().catch((err) => {
        setMode("offline")
      const response = JSON.parse(window.localStorage.getItem("recipes"));
      setRecipe(response);
      });
      setRecipe(response);
    }
    const response = JSON.parse(window.localStorage.getItem("recipes"));
    setRecipe(response);

    const foundRecipe = response.find((recipe) => recipe.id === id);
    setRecipe(foundRecipe);
   
  };
  useEffect(() => getRecipe(), []);

  if (!recipes) {
    return <h1>loading......</h1>;
  }

  return (
    <React.Fragment>
      <OfflineDiv>
        {mode === "offline" ? <h3>Currently In Offline Mode / Connection Error</h3> : null}
      </OfflineDiv>
      <Header>
        <Title>Eazy Meals</Title>
      </Header>
      <Body>
        <h1>{recipes.name}</h1>

        {recipes.photo && <img src={recipes.photo} alt={recipes.photo} />}

        <h2>Time in Minutes:{recipes.timeInMinutes}</h2>
        <h2>Description</h2>
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

          <StepsSwiper steps={recipes.steps} />
        </div>

        <button>skip Timer</button>
      </Body>
    </React.Fragment>
  );
};

export default GetRecipe;
