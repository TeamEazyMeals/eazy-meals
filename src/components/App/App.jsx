import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import GetRecipe from "../GetRecipe/GetRecipe.jsx";
import SignUp from "../SignUpSetUp/SignUpSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
import Config from "../../views/Config";
import Allergies from "../../views/Allergies";
import FamilyAllergies from "../../views/Allergies/FamilyAllergies";
import HealthConditions from "../../views/HealthConditions/HealthConditions";
import Preferences from "../../views/Preferences";
import Goals from "../../views/Goals/Goals";
import UploadCustomRecipe from "../UploadCustomRecipe/UploadCustomRecipe";
import MealPlan from "../../views/MealPlan/MealPlan";
import AddMealPlanTypeTable from "../../views/MealPlan/AddMealPlanTypeTable";

import { SignIn } from "../../views/SignIn/SignIn";
import HomePage from "../../views/HomePages/HomePage";
import AddOrFindRecipes from "../AddOrFindRecipes/AddOrFindRecipes";
import internalRecipes from "../../api/cms/internalRecipes";
import RecipeCategories from "../RecipeCategories/RecipeCategories";
import Fallback from "../../views/FallBack/FallBack";

internalRecipes.sync();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/config/allergies" children={<Allergies />} />
          <Route
            path="/config/familyallergies"
            children={<FamilyAllergies />}
          />
          <Route
            path="/config/healthconditions"
            children={<HealthConditions />}
          />
          <Route path="/config/preferences" children={<Preferences />} />
          <Route path="/config/goals" children={<Goals />} />
          <Route path="/config" children={<Config />} />
          <Route exact path="/findrecipes" children={<AddOrFindRecipes />} />
          <Route
            path="/findrecipes/uploadcustomrecipe"
            children={<UploadCustomRecipe />}
          />
          <Route path="/allrecipes/getrecipe" children={<GetRecipe />} />
          <Route
            path="/mealplan/addmealplantypetable"
            children={<AddMealPlanTypeTable />}
          />
          <Route path="/allrecipes/:recipeId" children={<GetRecipe />} />
          <Route path="/allrecipes" children={<AllRecipes />} />
          <Route path="/mealplan" children={<MealPlan />} />
          <Route path="/categories" children={<RecipeCategories />} />
          <Route path="/forgotpassword" children={<ForgotPassword />} />
          <Route path="/homepage/signup" children={<SignUp />} />
          <Route path="/homepage/login" children={<LogIn />} />

          <Route path="/signin" children={<SignIn />} />
           
          <Route path="/fallback" children={<Fallback />}></Route>
          <Route path="/" children={<HomePage />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;