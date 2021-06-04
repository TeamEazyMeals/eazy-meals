import React from "react";
import { useState } from "react";
import SignUpSetUp from "./SignUp.stories";
import useAuth from "../../utility/useAuth";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Form = styled.form`
  text-align: center;
  display: block;
`;
const Input = styled.div`
  padding: 1rem;
`;
const StyledButton = styled(Button)`
  && {
    background: #34a853;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 70px;
    color:white;
    margin-top:70px;

    
`;
const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;
const CancelButton = styled(Button)`
  && {
    margin-top: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 110px;
    background: #e5e5e5;
  }
`;
const Nav = styled.nav`
bacground-color:grey;
`

const PasswordAndEyeDiv = styled.div``;

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
 
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
        <Title>REGISTER</Title>
        <Form name="signup" onSubmit={handleSignUpForm}>
          <Input>
            <label>
              <TextField
                variant="filled"
                label="email"
                value={email}
                required
                onChange={handleEmailInput}
                inputProps={{
                  style: { padding: "20px 30px" },
                }}
              />
            </label>
          </Input>
          <label>
            <PasswordAndEyeDiv>
              <TextField
                variant="filled"
                type={passwordShown ? "text" : "password"}
                label="password"
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={togglePasswordVisiblity}>
                        {passwordShown ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </PasswordAndEyeDiv>
          </label>

          <StyledButton type="submit" variant="contained">
            CREATE ACCOUNT
          </StyledButton>
          <br></br>
          <CancelButton variant="contained" href="/">
            CANCEL
          </CancelButton>
        </Form>
      </nav>
    </>
  );
};
export default SignUp;
