import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import Config from "../../views/Config";
import Allergies from "../../views/Allergies";
import FamilyAllergies from "../../views/Allergies/FamilyAllergies";
import Health from "../../views/Health";
import HealthCondition from "../../views/Health/HealthCondition";
import Preferences from "../../views/Preferences";
import Goals from "../../views/Goals";


import HomePage from "../../views/AllRecipes/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/config/allergies" children={<Allergies />} />
        <Route path="/config/familyallergies" children={<FamilyAllergies />} />
        <Route path="/config/health" children={<Health />} />
        <Route path="/config/healthcondition" children={<HealthCondition />} />
        <Route path="/config/preferences" children={<Preferences />} />
        <Route path="/config/goals" children={<Goals />} />
        <Route path="/config" children={<Config />} />
        <Route path="/allrecipes/getrecipe" children={<GetRecipe />} />
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
