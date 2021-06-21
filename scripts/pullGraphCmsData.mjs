

import axios from "axios";
import fs from "fs/promises";
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
  }
}
`;

const init = async () => {
  const {
    data: {
      data: { recipes },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2w2ux95cw901z18eesaeu8/master",
    { query: GET_ALL_RECIPE_DATA_QUERY }
  );

  const recipePromiseArray = recipes.map(async (singleRecipe) => {
    await fs.writeFile(
      `./public/data/recipes/${singleRecipe.id}.json`,
      JSON.stringify(singleRecipe)
    );
  });
  await Promise.all(recipePromiseArray);
};
init();
