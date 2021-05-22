import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import Config from "../../views/Config";
import Allergies from "../../views/Allergies";
import Health from "../../views/Health";
import Preferences from "../../views/Preferences";
import Goals from "../../views/Goals";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>

      <Route path="/config/allergies" children={<Allergies />} />
      <Route path="/config/health" children={<Health />} />
      <Route path="/config/preferences" children={<Preferences/>} />
      <Route path="/config/goals" children={<Goals />} />

      <Route path="/config" children={<Config />} />





        <Route path="/allrecipes/getrecipe" children={<GetRecipe />} />
        <Route path="/allrecipes" children={<AllRecipes />} />

        <Route path="/login" children={<LogIn />} />
        <Route path="/forgotpassword" children={<ForgotPassword />} />
        <Route path="/" children={<SignUp />} />
      </Switch>
    
    </BrowserRouter>
  );
};
export default App;
