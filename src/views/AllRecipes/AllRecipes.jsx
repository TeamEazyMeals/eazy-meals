import { Redirect } from "react-router-dom";

import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import useLogIn from "../../components/LogInSetUp/useLogIn"
const AllRecipes = () => {
  const { handleLogout, isLoggedIn } = useLogIn();

  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>;
  }
  
  return (
    <>
      <nav>
        <button onClick={handleLogout}>Log out</button>
      </nav>
      <FetchRecipes></FetchRecipes>
    </>
  );
};

export default AllRecipes;
