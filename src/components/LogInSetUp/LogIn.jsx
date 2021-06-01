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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
`;

const Label = styled.label`
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const Input = styled.input`
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
`;

// const Lable = styled.Button`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   padding: 17px 100px;
//   display: flex;
// `;

const Link = styled.a`
  color: black;
  font-weight: bold;
  display: block;
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
