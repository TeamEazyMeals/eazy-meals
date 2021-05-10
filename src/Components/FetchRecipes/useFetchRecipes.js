import { useEffect, useReducer } from "react";
import Fuse from "fuse.js";

const reducer = (state, action) => {
  if (action.type === "SEARCH_ITEM_VALUE") {
    return { ...state, searchItem: action.payload };
  }
  if (action.type === "RECIPE_DATA") {
    return { ...state, recipeData: action.payload };
  }
  if (action.type === "SORT_VALUE") {
    return { ...state, sortValue: action.payload };
  }
  throw new Error("invalid type selected");
};

const defaultState = {
  recipeData: [],
  searchItem: "",
  sortValue: "",
};

const useFetchRecipes = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSort = (e) => {
    dispatch({ type: "SORT_VALUE", payload: e.target.value });
  };

  const getRecipeData = async () => {
    const response = await fetch("/data/recipeData.json");
    const data = await response.json();

    dispatch({ type: "RECIPE_DATA", payload: data });
    return data
  };

  useEffect(() => getRecipeData(), []);
  const handleOnSearch = ({ target }) => {
    const { value } = target;
    dispatch({ type: "SEARCH_ITEM_VALUE", payload: value });
  };
  console.log(state.recipeData);
  
  
  const fuse = new Fuse(state.recipeData, {
    keys: ["name", "description"],
    minMatchCharLength: 3,
  });

  const results = fuse.search(state.searchItem);
  if (!results) {
    console.log("no results");
  }
  const searchResults =
    state.searchItem.length < 3
      ? state.recipeData
      : results.map((result) => result.item);

  const compareFunction = (a, b) => {
    if (state.sortValue === "shortest time") {
      return parseInt(a.timeInMinutes) - parseInt(b.timeInMinutes);
    }
    if (state.sortValue === "longest time") {
      return parseInt(b.timeInMinutes) - parseInt(a.timeInMinutes);
    }
    if (state.sortValue === "a-z") {
      return a.name.toUpperCase() === b.name.toUpperCase()
        ? 0
        : a.name.toUpperCase() > b.name.toUpperCase()
        ? 1
        : -1;
    }
    if (state.sortValue === "z-a") {
      return b.name.toUpperCase() === a.name.toUpperCase()
        ? 0
        : b.name.toUpperCase() > a.name.toUpperCase()
        ? 1
        : -1;
    }
  };

  searchResults.sort(compareFunction);

  return {
    ...state,
    handleOnSearch,
    handleSort,
    searchResults,
  };
};

export default useFetchRecipes;
