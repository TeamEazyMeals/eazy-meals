import React from "react";
import {Redirect} from "react-router-dom";
import useAuth from "../../utility/useAuth";

const LogIn = () => {
  const {
    handleEmailInput,
    handlePasswordInput,
    handleLoginForm,
  } = useAuth({shouldNotBeLoggedIn:true});
 
  return (
    <div>
      <nav>
        <form name="logIn" onSubmit={handleLoginForm}>
          <p>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                onChange={handleEmailInput}
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
                onChange={handlePasswordInput}
              />
            </label>
          </p>
          <button type="submit">Log In</button>
        </form>
      </nav>


      <a href="/forgotpassword">Forgot your password?</a>
    </div>
  );
};
export default LogIn;
