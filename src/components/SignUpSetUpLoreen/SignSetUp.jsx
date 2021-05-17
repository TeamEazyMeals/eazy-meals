import React from "react";
import {Redirect} from "react-router-dom"
import useSignUp from "./useSignUp";


const SignUp = () => {
  const { setEmail, setPassword, handleSignUp , isSignedIn} = useSignUp();
 if (isSignedIn){ return <Redirect to="/allrecipes"/>}

  return (
    <div>
      <nav>
        <form name="signup" onSubmit={handleSignUp}>
          <p>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Password
              <input
                type="password"
                name="password"
                autoComplete="on"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </p>
          <button type="submit">Sign me up!</button>
        </form>
      </nav>
     
      <a href="/forgotpassword">Forgot your password?</a>
    </div>
  );
};
export default SignUp;
