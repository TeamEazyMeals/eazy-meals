import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllRecipes from "../../views/AllRecipes/AllRecipes";
import LogIn from "../LogInSetUp/LogIn";
import SignUp from "../SignUpSetUpLoreen/SignSetUp";
import ForgotPassword from "../LogInSetUp/ ForgotPassword";
// import cms from "../../api/cms/cms"


const App = () => {
 

  return (
    <BrowserRouter>
      {/* <button onClick={cms.syncRecipes}>GET ALLRECIPES</button> */}
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
        <Route path="/allrecipes" children={<AllRecipes />} />
        <Route path="/login" children={<LogIn />} />
        <Route path="/forgotpassword" children={<ForgotPassword />} />
        <Route path="/" children={<SignUp />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
