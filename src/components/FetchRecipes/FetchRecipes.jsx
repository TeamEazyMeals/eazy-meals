import React from "react";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Sort from "../SortRecipes/SortRecipes";
import useFetchRecipes from "./useFetchRecipes";
import RecipeCategories from "../RecipeCategories/RecipeCategories";

const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const Title3 = styled.h3`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
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
    return <Title> Loading recipes.....</Title>;
  }

  return (
    <Content>
      <OfflineDiv>
        {mode === "offline" ? (
          <h3>
            Currently In Offline Mode / Connection Error
          </h3>
        ) : null}
      </OfflineDiv>
      <Title>eazy-meals</Title>

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
              <Title3>All Recipes</Title3>
              <List>
                <li>
                  <Title>
                    <a href={`/allrecipes/${id}`}>{name}</a>
                  </Title>
                </li>
                <li>{photo && <Image src={photo} alt={name} />}</li>
                <h4>Time in minutes:{timeInMinutes}</h4>

                <RecipeIngredients ingredients={ingredients} />
                <Title>Method</Title>
                <li>{description}</li>
                <h3>Recipe tags:</h3>

                {tags != undefined ? (
                  Object.values(tags).map((tag) => {
                    <RecipeCategories tag={tag} />;
                    return <p>{tag}</p>;
                  })
                ) : (
                  <p>no tags</p>
                )}
              </List>
            </div>
          );
        }
      )}
    </Content>
  );
};
export default FetchRecipes;
