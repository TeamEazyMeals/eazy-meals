import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import useLogIn from "../../components/SignUpSetUpLoreen/useSignUp";

const AllRecipes = () => {
const {handleLogout} = useLogIn();
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
