import axios from "axios";
// import app from "../app/app"
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
    steps
  }
}
`;

const syncRecipes = async () => {
  const {data:{data: recipes}} = await axios.post(
    'https://api-eu-central-1.graphcms.com/v2/cko2w2ux95cw901z18eesaeu8/master',
    { query: GET_ALL_RECIPE_DATA_QUERY }
  );
  window.localStorage.setItem("recipes", JSON.stringify(recipes))
return recipes;
};

export default {
  syncRecipes,
};
