import React from "react";
import useLogIn from "./useLogIn";

const SignUp = () => {
  const { setEmail, setPassword, handleSignUp } = useLogIn();
  return (
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
  );
};
export default SignUp;
