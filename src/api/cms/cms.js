import axios from "axios";

const GET_ALL_RECIPE_DATA_QUERY = `
{
  recipes {
    id
    timeInMinutes
    name
    description
    photo {
      url
    }
    ingredients

    steps
    tags {
    
      name
      description
    }
  }
}
`;

const syncRecipes = async () => {
  const {
    data: {
      data: { recipes },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2w2ux95cw901z18eesaeu8/master",
    { query: GET_ALL_RECIPE_DATA_QUERY }
  );
  const transformedRecipes = recipes.map((singleRecipe) => {
    return {
      ...singleRecipe,
      ingredients: singleRecipe.ingredients[0].ingredients,
      photo: singleRecipe.photo && singleRecipe.photo.url,
      tags:
        singleRecipe.tags
          && singleRecipe.tags[0]
          
    };

  });
  
  window.localStorage.setItem("recipes", JSON.stringify(transformedRecipes));
  return transformedRecipes;
};

export default {
  syncRecipes,
};
