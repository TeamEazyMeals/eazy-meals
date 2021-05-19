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
        <Route path="/allrecipes" children={<AllRecipes />} />
        <Route path="/login" children={<LogIn />} />
        <Route path="/forgotpassword" children={<ForgotPassword />} />
        <Route path="/" children={<SignUp />} />
      </Switch>
    
    </BrowserRouter>
  );
};
export default App;
