import { useState } from "react";
import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});

const useLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = Boolean(window.localStorage.getItem("user"));
 
  const handleSignUp = async (event) => {
    event.preventDefault();
    await auth
      .signup(email, password)
      .then((response) => console.log("Confirmation email sent", response))
      .catch((error) => console.log("It's an error", error));

    const user = await auth.login(email, password);

    window.localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
  };

  return {
    setEmail,
    setPassword,
    handleSignUp,
    handleLogout,
    isLoggedIn,
  };
};
export default useLogIn;
