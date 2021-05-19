import React from "react";
import { Redirect } from "react-router-dom";
import useSignUp from "./useSignUp";
import useAuth from "../../utility/useAuth";

const SignUp = () => {
  const {
    error,
    email,
    password,
    handleEmailInput,
    handlePasswordInput,
    handleSignUpForm,
  } = useAuth({ shouldBeLoggedIn: false });

  return (
    <div>
      {/* {error && <div>{error}</div>} */}
      <nav>
        <form name="signup" onSubmit={handleSignUpForm}>
          <p>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
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
                value={password}
                onChange={handlePasswordInput}
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
