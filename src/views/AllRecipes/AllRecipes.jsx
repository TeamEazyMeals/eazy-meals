import FetchRecipes from "../../Components/FetchRecipes/FetchRecipes";
import useLogIn from "../../Components/SignUpSetUpLoreen/useSignUp";
import SignUp from "../../Components/SignUpSetUpLoreen/SignSetUp";
const AllRecipes = () => {
  const { handleLogout, isLoggedIn } = useLogIn();
  return (
    <>
      {isLoggedIn ? (
        <>
          <nav>
            <button onClick={handleLogout}>Log out</button>
          </nav>
          <FetchRecipes></FetchRecipes>
        </>
      ) : (
        <SignUp></SignUp>
      )}
    </>
  );
};

export default AllRecipes;
