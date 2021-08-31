import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import useAuth from "../../utility/useAuth";
import { Layout } from "../../components/Layout"

const AllRecipes = () => {
  const { error, handleLogoutButton } = useAuth({ shouldBeLoggedIn: true });
  return (
    <>
      <Layout>
        <button onClick={handleLogoutButton}>Log out</button>
      </Layout>
      <FetchRecipes></FetchRecipes>
    </>
  );
};

export default AllRecipes;
