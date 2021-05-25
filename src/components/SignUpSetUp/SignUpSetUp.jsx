import React from "react";
import { Redirect } from "react-router-dom";
import useSignUp from "./SignUp.stories";
import useAuth from "../../utility/useAuth";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const Link = styled.div`
  text-align: center;
`;

const StyledButton = styled(Button)`
  && {
    background: #34a853;
  }
`;

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
    <>
      {error && <div>{error}</div>}
      <nav>
        <Form name="signup" onSubmit={handleSignUpForm}>
          <p>
            <label>
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
          <StyledButton type="submit" variant="contained">
            Sign me up!
          </StyledButton>
        </Form>
      </nav>
      <Link>
        <a href="/forgotpassword">Forgot your password?</a>
      </Link>
    </>
  );
};
export default SignUp;
