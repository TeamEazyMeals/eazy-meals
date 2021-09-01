import React, { useState, useEffect } from "react";
import SetServings from "../../components/SetServings/SetServings";
import StepsSwiper from "../StepsSwiper/StepsSwiper";
import styled from "styled-components";
import { tokens } from "../../data/Tokens"
import { v4 as uuidv4 } from "uuid";
import app from "../../api/app/app";
import cms from "../../api/cms/cms";
import { useParams } from "react-router-dom";
const Body = styled.div`
  text-align: center;
  align-content:center;
  margin: auto;
  width: 60%;
  padding: 10px;
  display:flex;
`;
const Content =styled.div`
text-align: center;
  margin: auto;
  width: 60%;
  padding:${tokens.spacing.l};
  display:inline-block;
  padding-right:10%;
`
const StepsDiv=styled.div`
margin: auto;
width: 60%;
padding: 10px;
display:flex;
padding-right:30%;
`
const Header = styled.header`
  background: ${tokens.shades.green.heavy};
  height: 6.5rem;
  /* color: white; */
  text-align: center;
`;
const Title = styled.h1`
  font-family:${tokens.fontFamily.general};
  font-weight: ${tokens.fontWeight.black};
  font-size: ${tokens.fontSize.xl};
  padding-top: 1.5rem;
  color: white;
`;
const Button = styled.button`
color: white;
background: ${tokens.shades.green.heavy};
font-size: 1em;
margin: 2em;
width: 25em;
height: 50px;
padding: 0.25em 1em;
border: ${tokens.radius.l};
border-radius: 3px;
text-transform : uppercase;
padding: ${tokens.spacing.s};
`;
const Text = styled.div`
  text-align: center;
  margin: auto;
  width: 60%;
`;
const Image = styled.div`
 position:relative;
 border: ${tokens.radius.m};
 width: 50%;
 float: left;
 padding-left: 10rem;
 text-align: center;
  margin: auto;
  width: 60%;
`;
const OfflineDiv = styled.div`
  padding-left: 10%;
  color: ${tokens.shades.green};
  background-color: #FEEFB3;
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
       <Text> <h1>{recipes.name}</h1>
        <Image>{recipes.photo && <img src={recipes.photo} alt={recipes.photo} />} </Image>
<Content>
        <h2>Time in Minutes:{recipes.timeInMinutes}</h2>
        <h2>Description</h2>
        <p>{recipes.description}</p>
        <h2>Set Servings</h2>
        <SetServings count={count} setCount={setCount} />
        </Content>
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
          <h2>Steps</h2>
          < StepsDiv>
          <StepsSwiper steps={recipes.steps} />
          </ StepsDiv>
        <button>skip Timer</button>
        </Text>
      </Body>
    </React.Fragment>
  );
};
export default GetRecipe;

