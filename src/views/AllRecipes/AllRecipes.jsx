import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import useAuth from "../../utility/useAuth";
import {Layout}  from "../../components/Layout"
const AllRecipes = () => {
  const { error, handleLogoutButton } = useAuth({ shouldBeLoggedIn: true });
  return (
    <Layout>
      <nav>
        <button onClick={handleLogoutButton}>Log out</button>
      </nav>
      <FetchRecipes></FetchRecipes>
    </Layout>
  );
};

export default AllRecipes;
