import AllRecipes from "../../views/AllRecipes/AllRecipes";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import useLogIn from "../SignUpSetUpLoreen/useSignUp";
const App = () => {
  const {isLoggedIn} = useLogIn();
  
  return (
    <>
      <div>{isLoggedIn ? <AllRecipes></AllRecipes> : <SignUp />}</div>
    </>
  );
}
export default App;
