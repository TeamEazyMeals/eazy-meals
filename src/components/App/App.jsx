import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import SignUp from "../SignUpSetUp/SignUpSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import Config from "../../views/Config";
import Allergies from "../../views/Allergies";
import Health from "../../views/Health";
import Preferences from "../../views/Preferences";
import Goals from "../../views/Goals";
import { CssBaseline } from "@material-ui/core";
import HomePage from "../../views/AllRecipes/HomePage";
import AddOrFindRecipes from "../AddOrFindRecipes/AddOrFindRecipes"
import UploadCustomRecipe from "../UploadCustomRecipe/UploadCustomRecipe"

const App = () => {
  return (
    <>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route path="/config/allergies" children={<Allergies />} />
          <Route path="/config/health" children={<Health />} />
          <Route path="/config/preferences" children={<Preferences />} />
          <Route path="/config/goals" children={<Goals />} />
          <Route path="/config" children={<Config />} />
          <Route exact path="/findrecipes" children={<AddOrFindRecipes/>}/>
          <Route path="/findrecipes/uploadcustomrecipe" children={<UploadCustomRecipe/>} />
          <Route path="/allrecipes/getrecipe" children={<GetRecipe />} />
          <Route path="/allrecipes/:recipeId" children={<GetRecipe />} />
          <Route path="/allrecipes" children={<AllRecipes />} />
          <Route path="/forgotpassword" children={<ForgotPassword />} />
          <Route path="/homepage/signup" children={<SignUp />} />
          <Route path="/homepage/login" children={<LogIn />} />
          <Route path="/" children={<HomePage />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
