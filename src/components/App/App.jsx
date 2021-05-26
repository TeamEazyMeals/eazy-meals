import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
//import MealPlan from '../MealPlan/MealPlan';


const App = () => {
 

  return (
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
  );
};
export default App;
