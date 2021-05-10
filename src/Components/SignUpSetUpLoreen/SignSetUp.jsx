import React from "react";
import useLogIn from "./useSignUp";

const SignUp = () => {
  const {
    setEmail,
    setPassword,
    handleSignUp,
    handleLogIn,
    handleForgotPassword,
  } = useLogIn();
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
      <button>
        <a href="#" onClick={handleForgotPassword}>Forgot your password?</a>
      </button>
    </nav>
  );
};
export default SignUp;
