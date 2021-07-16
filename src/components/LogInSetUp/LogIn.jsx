import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../utility/useAuth";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: white;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 66px;
  letter-spacing: 0px;
  text-align: center;
`;
const HeaderWrapper = styled.div`
  
  background-color: white;
  width: 40em;
  display:flex;
  align-items:center;
`;

const Wrapper = styled.nav`
  background: #34a853;
  margin-bottom: 4em;
  width:100em;
`;

const Form = styled.form`
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
  position: relative;
`;

const Label = styled.label`
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-flex;
  border: none;
  border-bottom: 2px solid grey;
`;

const Link = styled.a`
  color: black;
  font-weight: bold;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 1rem;
  text-transform: uppercase;
  user-select: none;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
`;
const StyledButton = styled(Button)`
&& {
    background: #34a853;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 110px;
    color:white;
    margin-top:70px;}
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
background-color:grey;
`
const LogIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { handleEmailInput, handlePasswordInput, handleLoginForm } = useAuth({
    shouldNotBeLoggedIn: true,
  });

  return (
    <div>
      <Container>
        <HeaderWrapper>
          <Wrapper>
            <Header>SIGN IN</Header>
          </Wrapper>
        </HeaderWrapper>

        <Form name="logIn" onSubmit={handleLoginForm}>
          <p>
            <Label>
              Email Address
              <Input
                variant="filled"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleEmailInput}
              />
            </Label>
          </p>
          <p>
            <Label>
              Password
              <Input
                variant="filled"
                name="password"
                placeholder="Enter Password"
                autoComplete="on"
                type={passwordShown ? "text" : "password"}
                required
                onChange={handlePasswordInput}
              />
            </Label>
          </p>

          <Label>
          <StyledButton type="submit" variant="contained">
            Sign In
          </StyledButton>
          <br></br>
          <CancelButton variant="contained" href="/">
            CANCEL
          </CancelButton>
           
          </Label>
        </Form>
      </Container>

      <Link>
        <a href="/forgotpassword">Forgot your password?</a>
      </Link>
    </div>
  );
};
export default LogIn;
