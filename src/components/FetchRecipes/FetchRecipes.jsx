import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/Tokens"
import SearchIcon from "@material-ui/icons/Search";
import Sort from "../SortRecipes/SortRecipes";
import useFetchRecipes from "./useFetchRecipes";
import "./recipe.css";

const StyledA = styled.a`
  list-style: none;
  color: inherit;
`;
const Title3 = styled.h3`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const Header = styled.header`
  background: ${tokens.shades.green.heavy};
  height: 6.5rem;
  text-align: center;
`;
const List = styled.ul`
  list-style: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 10%;
  height: auto;
`;
const OfflineDiv = styled.div`
  padding-left: 10%;
  color: #9f6000;
  background-color: #feefb3;
`;

const FetchRecipes = () => {
  const {
    recipeData,
    searchItem,
    handleOnSearch,
    handleSort,
    searchResults,
    mode,
  } = useFetchRecipes();

  if (!recipeData) {
    return <h4> Loading recipes.....</h4>;
  }

  return (
    <Content>
      <OfflineDiv>
        {mode === "offline" ? (
          <h3>Currently In Offline Mode / Connection Error</h3>
        ) : null}
      </OfflineDiv>
      <h3>eazy-meals</h3>

      <div>
        <SearchIcon fontSize="small"></SearchIcon>
        <input
          type="text"
          value={searchItem}
          placeholder="search recipes.."
          onChange={handleOnSearch}
        />

        <Sort handleSort={handleSort}></Sort>
      </div>
      <Title3>All Recipes</Title3> 
      {searchResults.map(
        ({
          id,
          name,
          photo,
          ingredients,
          description,
          timeInMinutes,
          tags,
        }) => {
          return (
            <div key={id}>
              <article className="recipe">
                <div className="recipe-img">
                  {photo && (
                    <img className="recipe-img" src={photo} alt={name} />
                  )}
                </div>
                <div className="recipe-footer">
                  <h4>{name}</h4>
                  <StyledA href={`/allrecipes/${id}`}>More about {name}</StyledA>
                </div>
              </article>
             
            </div>
          );
        }
      )}
    </Content>
  );
};
export default FetchRecipes;
