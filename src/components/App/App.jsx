import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
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

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      {/* <button onClick={cms.syncRecipes}>GET ALLRECIPES</button> */}
      <Switch>
        <Route path="/allrecipes" children={<AllRecipes />} />
        {/* <Router path="/mealplan" children={<MealPlan />} /> */}
        <Route path="/login" children={<LogIn />} />
        <Route path="/forgotpassword" children={<ForgotPassword />} />
        <Route path="/" children={<SignUp />} />
      </Switch>
    </BrowserRouter>
=======
    <>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route path="/config/allergies" children={<Allergies />} />
          <Route path="/config/health" children={<Health />} />
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
    </>
>>>>>>> 9ff4a5410bce15e4f7b8e5dbb6ad7604bd622afa
  );
};
export default App;
