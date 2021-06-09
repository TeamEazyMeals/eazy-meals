import React from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../utility/useAuth";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core/Checkbox";

const Header = styled.h1`
  font-size: 64px;
  text-align: center;
  color: white;
  font: Robot;
  background: #34a853;
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
  flex-direction:column;
  padding: 1rem;
  text-transform: uppercase;
  user-select: none;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
`;
const LogIn = () => {
  const { handleEmailInput, handlePasswordInput, handleLoginForm } = useAuth({
    shouldNotBeLoggedIn: true,
  });

  return (
    <div>
      <nav>
        <Header>SIGN IN</Header>
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
                required
                onChange={handlePasswordInput}
              />
            </Label>
          </p>

          <Label>
            <Button
              type="submit"
              style={{
                background: "#34A853",
                "&:hover": "#f0f0f0",
                margin: "0em",
                position: "relative",
                justifyContent: "space-around",
              }}
            >
              Log In{" "}
            </Button>
            <Button
              type="submit"
              style={{ background: "#34A853", "&:hover": "#f0f0f0" }}
            >
              Cancel{" "}
            </Button>
          </Label>
        </Form>
      </nav>

      <Link>
        <a href="/forgotpassword">Forgot your password?</a>
      </Link>
    </div>
  );
};
export default LogIn;
