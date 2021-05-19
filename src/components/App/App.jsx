import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import StepsSwiper from "../StepsSwiper/StepsSwiper";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route
          path="/allrecipes/getrecipe"
          children={<GetRecipe></GetRecipe>}
        />
        <Route path="/allrecipes" children={<AllRecipes></AllRecipes>} />

        <Route path="/login" children={<LogIn></LogIn>} />
        <Route
          path="/forgotpassword"
          children={<ForgotPassword></ForgotPassword>}
        />
        <Route path="/" children={<SignUp></SignUp>} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
