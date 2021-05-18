import { useState } from "react";
import GoTrue from "gotrue-js";
import SignUp from "./SignSetUp";
import FetchRecipes from "../FetchRecipes/FetchRecipes";


const auth = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});

const useLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSignedIn = Boolean(window.localStorage.getItem("user"));
const isForgotPassword = true;
  const handleSignUp = async (event) => {
    console.log(email, password);
    event.preventDefault();
    const user = await auth
      .signup(email, password)
      .then((response) => console.log("Confirmation email sent", response))
      .catch((error) => console.log("It's an error", error));

    window.localStorage.setItem("user", JSON.stringify(user));
    <FetchRecipes></FetchRecipes>;
    // window.location.reload();
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    const user = await auth.login(email, password);
    window.localStorage.setItem("user", JSON.stringify(user));
    // window.location.reload();
  };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    <SignUp></SignUp>;
    // window.location.reload();
  };

  const handleForgotPassword = (event)=>{
     event.preventDefault();
    auth
      .requestPasswordRecovery(email)
      .then((response) => console.log("Recovery email sent", { response }))
      .catch((error) => console.log("Error sending recovery mail: %o", error));
    
// window.location.reload();
  }

  
  return {
    setEmail,
    setPassword,
    handleSignUp,
    handleLogout,
    handleLogIn,
    handleForgotPassword,
    isForgotPassword,
    isSignedIn,
  };
};
export default useLogIn;
