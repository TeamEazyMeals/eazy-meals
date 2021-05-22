import React from "react";
import { Redirect } from "react-router-dom";
import useSignUp from "./SignUp.stories";
import useAuth from "../../utility/useAuth";
import { TextField,Button } from "@material-ui/core";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const StyledButton = styled(Button)`
&&{}
`

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
      {error && <div>{error}</div>}
      <nav>
        < Form name="signup" onSubmit={handleSignUpForm}>
          <p>
            <label>
              Email
              <TextField
              variant="outlined" 
                label="email"
                value={email}
                required
                onChange={handleEmailInput}
              />
            </label>
          </p>
          <p>
            <label>
              Password
              <TextField 
              variant="outlined"
                type="password"
                label="password"
                autoComplete="on"
                required
                value={password}
                onChange={handlePasswordInput}
              />
            </label>
          </p>
          <button type="submit">Sign me up!</button>
        </ Form>
      </nav>

      <a href="/forgotpassword">Forgot your password?</a>
    </div>
  );
};
export default SignUp;
