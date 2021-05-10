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
    console.log(email, password);
    event.preventDefault();
    const user = await auth
      .signup(email, password)
      .then((response) => console.log("Confirmation email sent", response))
      .catch((error) => console.log("It's an error", error));

    window.localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogIn = async () => {
    const user = await auth
      .login(email, password)
      .then((response) => {
        console.log("Success! Response:");
      }).catch((error) =>
        console.log("Failed :( "));
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
    handleLogIn,
  };
};
export default useLogIn;
