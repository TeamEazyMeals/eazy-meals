import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import HomePage from "../../views/AllRecipes/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/allrecipes/:recipeId" children={<GetRecipe />} />
        <Route path="/allrecipes" children={<AllRecipes />} />
        <Route path="/forgotpassword" children={<ForgotPassword />} />
        <Route path="/homepage/signup" children={<SignUp />} />
        <Route path="/homepage/login" children={<LogIn />} />
        <Route path="/" children={<HomePage />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
