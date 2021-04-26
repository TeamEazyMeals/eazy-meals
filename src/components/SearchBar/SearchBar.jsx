import Fuse from "fuse.js";
// import RecipeData from "../../../public/data/recipeData.json";

const SearchBar = ({ recipeData }) => {
  const fuse = new Fuse(
    { recipeData },
    {
      keys: ["name", "ingredients", "description", "timeInMinutes"],
    }
  );

  const results = fuse.search("Fantastic Metal Shirt");
  console.log({ results });
  return (
    <div>
      <input type="text" />
      <button>search</button>
    </div>
  );
};

export default SearchBar;
