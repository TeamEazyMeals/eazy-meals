import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import useSignUp from "./SignUp.stories";
import useAuth from "../../utility/useAuth";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
<<<<<<< HEAD
import InputAdornment from "@material-ui/core/InputAdornment";
=======
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import IconButton from "@material-ui/core/IconButton";

>>>>>>> 9ff4a5410bce15e4f7b8e5dbb6ad7604bd622afa
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
`;
const Butt = styled.div`
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  && {
    background: #34a853;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 60px;
    color:white;
<<<<<<< HEAD
    
=======
>>>>>>> 9ff4a5410bce15e4f7b8e5dbb6ad7604bd622afa
`;
const Label = styled.label`
  padding: 1rem;
`;
const Nav = styled.nav`
padding 2rem;
`;
const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;
const CancelButton = styled(Button)`
  && {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 100px;
    display: flex;
  }
`;
const StyledIoIosEye = styled(IoIosEye)`
  && {
    fill: black;
    width: 2rem;
    height: auto;
  }
`;
const StyledIoIosEyeOff = styled(IoIosEyeOff)`
  && {
    fill:black;
    width: 2rem;
    height: auto;
  }
`;

const passwordAndEyeDiv = styled.div`
display:flex;
justify-content:center;
`

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
      <Nav>
        <Title>REGISTER</Title>
        <Form name="signup" onSubmit={handleSignUpForm}>
          <Label>
            <TextField
              variant="filled"
              label="email"
              value={email}
              required
              onChange={handleEmailInput}
            />
          </Label>

          <Label>
            <passwordAndEyeDiv>
              <TextField
                variant="filled"
                type={passwordShown ? "text" : "password"}
                label="password"
                autoComplete="on"
                required
                value={password}
                onChange={handlePasswordInput}
              />
              {passwordShown ? (
                <StyledIoIosEyeOff onClick={togglePasswordVisiblity} />
              ) : (
                <StyledIoIosEye onClick={togglePasswordVisiblity} />
              )}
            </passwordAndEyeDiv>
          </Label>

          <Butt>
            <StyledButton type="submit" variant="contained">
              CREATE ACCOUNT
            </StyledButton>
          </Butt>
          <CancelButton variant="contained" href="/">
            CANCEL
          </CancelButton>
        </Form>
      </Nav>
    </>
  );
};
export default SignUp;
