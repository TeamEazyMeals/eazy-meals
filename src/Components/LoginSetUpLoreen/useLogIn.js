import { useState } from "react";
import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});

const useLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   debugger;
  const handleSignUp = async () => {
    console.log("signuprunning");

    await auth
      .signup((email, password) => {
        console.log("Success!Check your inbox! ");
      })
      .catch((error) => console.log("It 's an error", error));

    const user = await auth
      .login((email, password) => console.log("Success!Check your inbox! "))
      .catch((error) => console.log("login error", error));
    console.log(email, password);

    window.sessionStorage.setItem("user", JSON.stringify(user));
  };

  return {
    setEmail,
    setPassword,
    handleSignUp,
  };
};
export default useLogIn;
