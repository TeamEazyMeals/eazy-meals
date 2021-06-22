import React from "react";
import internalRecipes from "../../api/cms/internalRecipes";

internalRecipes.sync();
const App = () => {
  return <div>123</div>;
};
export default App;

// import React from "react";
// import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
// import AllRecipes from "../../views/AllRecipes/AllRecipes";
// import LogIn from "../LogInSetUp/LogIn";
// import GetRecipe from "../GetRecipe/GetRecipe.jsx";
// import SignUp from "../SignUpSetUp/SignUpSetUp";
// import ForgotPassword from "../LogInSetUp/ ForgotPassword";
// import Config from "../../views/Config";
// import Allergies from "../../views/Allergies";
// import FamilyAllergies from "../../views/Allergies/FamilyAllergies";
// import HealthConditions from "../../views/HealthConditions/HealthConditions";
// import Preferences from "../../views/Preferences";
// import Goals from "../../views/Goals";
// import UploadCustomRecipe from "../UploadCustomRecipe/UploadCustomRecipe";
// import MealPlan from "../MealPlan/MealPlan";
// import AddRecipeToMealPlan from "../MealPlan/AddRecipeToMealPlan";
// import HomePage from "../../views/AllRecipes/HomePage";
// import AddOrFindRecipes from "../AddOrFindRecipes/AddOrFindRecipes";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/config/allergies" children={<Allergies />} />
//           <Route
//             path="/config/familyallergies"
//             children={<FamilyAllergies />}
//           />

//           <Route
//             path="/config/healthconditions"
//             children={<HealthConditions />}
//           />
//           <Route path="/config/preferences" children={<Preferences />} />
//           <Route path="/config/goals" children={<Goals />} />
//           <Route path="/config" children={<Config />} />
//           <Route exact path="/findrecipes" children={<AddOrFindRecipes />} />
//           <Route
//             path="/findrecipes/uploadcustomrecipe"
//             children={<UploadCustomRecipe />}
//           />
//           <Route path="/allrecipes/getrecipe" children={<GetRecipe />} />
//           <Route path="/allrecipes/:recipeId/addrecipetomealplan"
//             children={<AddRecipeToMealPlan />}
//           />
//           <Route path="/allrecipes/:recipeId" children={<GetRecipe />} />
//           <Route path="/allrecipes" children={<AllRecipes />} />
//           <Route path="/mealplan" children={<MealPlan />} />

//           <Route path="/forgotpassword" children={<ForgotPassword />} />
//           <Route path="/homepage/signup" children={<SignUp />} />
//           <Route path="/homepage/login" children={<LogIn />} />
//           <Route path="/" children={<HomePage />} />
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
