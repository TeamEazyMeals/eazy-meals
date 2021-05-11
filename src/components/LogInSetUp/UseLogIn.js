import { useState } from "react";
import GoTrue from "gotrue-js";
// import LogIn from "../LogInSetUp/LogIn";
// import FetchRecipes from "../FetchRecipes/FetchRecipes";

const auth = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});

const useLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = Boolean(window.localStorage.getItem("user"));
  const isForgotPassword = true;
  
  const handleLogIn = async (event) => {
    event.preventDefault();
    const user = await auth.login(email, password);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();
  };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    console.log("MUST RENDER LOG IN PAGE")
    window.location.reload();
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    auth
      .requestPasswordRecovery(email)
      .then((response) => console.log("Recovery email sent", { response }))
      .catch((error) => console.log("Error sending recovery mail: %o", error));

    window.location.reload();
  };

  return {
    setEmail,
    setPassword,
    handleLogout,
    isLoggedIn,
    handleLogIn,
    handleForgotPassword,
    isForgotPassword,
  };
};
export default useLogIn;
