import axios from "axios";
import fs from "fs/promises";
import md5 from "md5";
const GET_ALL_RECIPE_DATA_QUERY = `
{
  recipes {
    id
    timeInMinutes
    name
    description
    ingredients
    steps

    photo {
      url
    }
    tags{
      id
      
    }
    
  }
}
`;

const GET_ALL_TAG_DATA_QUERY=`
{
  tags{
    id
    name
    description

  }
}
`
const init = async () => {
  const {
    data: {
      data: { recipes },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2w2ux95cw901z18eesaeu8/master",
    {
      query: GET_ALL_RECIPE_DATA_QUERY,
    }
  );
  const promiseArray = recipes.map(async (singleRecipe) => {
    const stringVersion = JSON.stringify(singleRecipe);
    await fs.writeFile(
      `./public/data/recipes/${singleRecipe.id}.json`,
      stringVersion
    );
    return [singleRecipe.id, md5(stringVersion)];
  });
  const hashes = await Promise.all(promiseArray).catch(console.error);
  const primaryHash = md5(hashes);
  const recipeHashes = hashes.reduce(
    (result, [id, hash]) => ({
      ...result,
      [id]: hash,
    }),
    {}
  );
  await fs.writeFile(
    "./public/data/recipe-hashes.json",
    JSON.stringify({
      id: "hashes",
      primary: primaryHash,
      recipes: recipeHashes,
    })
  );
  const {
    data: {
      data: { tags },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2w2ux95cw901z18eesaeu8/master",
    {
      query: GET_ALL_TAG_DATA_QUERY,
    }
  );
  await fs.writeFile(
    "./public/data/recipe-tags.json",
    JSON.stringify(tags)
  );
};
init();
