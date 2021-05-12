import React from "react";
import {Redirect} from "react-router-dom"
import useLogIn from "./useLogIn";

const LogIn = () => {
  const { setEmail, setPassword, handleLogIn, isLoggedIn } = useLogIn();
  if(isLoggedIn){return <Redirect to="/allrecipes"/>}
  return (
    <div>
      <nav>
        <form name="logIn" onSubmit={handleLogIn}>
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
          <button type="submit">Log In</button>
        </form>
      </nav>
      <button onClick={<Redirect to="/forgotpassword"/>}>
        Forgot your password?
      </button>
    </div>
  );
};
export default LogIn;
