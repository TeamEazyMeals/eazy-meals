import { Redirect } from "react-router-dom";

import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import useAuth from "../../utility/useAuth";
const AllRecipes = () => {
  const {
    error,
    handleLogoutButton,
  } = useAuth({ shouldBeLoggedIn: true });

  return (
    <>
      <nav>
        <button onClick={handleLogoutButton}>Log out</button>
      </nav>
      <FetchRecipes></FetchRecipes>
    </>
  );
};

export default AllRecipes;
