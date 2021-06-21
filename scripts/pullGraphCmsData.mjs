

import axios from "axios";
import fs from "fs/promises";
import md5 from "md5"
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
   const stringVersion = JSON.stringify(singleRecipe);
    await fs.writeFile(
      `./public/data/recipes/${singleRecipe.id}.json`,
      stringVersion
    );
    return md5(stringVersion)
  });
  const hashes = await Promise.all(recipePromiseArray).catch(console.error);
  const primaryHash = md5(hashes);
  await fs.writeFile(
    `./public/data/recipe-hashes.json`,
    JSON.stringify({
      primary:primaryHash,
      array:hashes,
    })
  );
};
init();
