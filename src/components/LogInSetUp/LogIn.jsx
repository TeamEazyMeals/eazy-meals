import React from "react";
import {Redirect} from "react-router-dom";
import useAuth from "../../utility/useAuth";
import styled from "styled-components";
import Button from "@material-ui/core/Button"
import { Checkbox } from "@material-ui/core/Checkbox";

const Header = styled.h1`
font-size: 64px;
text-align: center;
color: white;
font: Robot;
background: #34a853

`;

 const Form = styled.form`
   display: block;
   margin-top: 0em;
   position: relative;
   padding: 1rem;
   border: .2rem solid #b7b7a4;
   border-radius: 8px;
   margin-left: 0;
   margin-right: 0;
 `;

 const Label = styled.label`
    position: relative;
    padding: 1rem;
    border: 2rem
    display: inline-block;
    margin-bottom: .5rem;
    box-sizing: border-box;
    cursor: default;
    margin-left: 0;
    margin-right: 0;

 `;
   
   
 const Input = styled.input`
 width: 95%;
 padding: 12px 20px;
 margin: 8px 0;
 display: inline-block;
 border: 1px solid #ccc;
 border-radius: 4px;
 box-sizing: border-box;
 `;
 
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
  const {
    handleEmailInput,
    handlePasswordInput,
    handleLoginForm,
  } = useAuth({shouldNotBeLoggedIn:true});
 
  return (
    <div>
      <nav>
        <Header>SIGN IN</Header>
        <Form name="logIn" onSubmit={handleLoginForm}>
          <p>
            <Label>
              Email Address
              <Input 
                type="email"
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
                type="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="on"
                required
                onChange={handlePasswordInput}
              />
            </Label>
          </p>
          
          
          <Label> 
          <Button type="submit" style={{ background: "#34A853" , "&:hover":"#f0f0f0", margin: "0em", position: "relative", justifyContent: "space-around"}}>Log In </Button> 
          <Button type="submit" style={{ background: "#34A853", "&:hover":"#f0f0f0" }}>Cancel </Button>
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
