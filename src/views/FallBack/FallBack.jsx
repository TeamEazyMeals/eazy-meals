import React from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../utility/useAuth";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Header = styled.h4`
  font-size: 64px;
  text-align: center;
  color: white;
  font: Robot;
  background: #34a853;
`;

const StyledButton = styled(Button)`
  && {
    background: #34a853;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 17px 70px;
    color:white;
    margin-top:50px;
    font-size:20px;
    margin-left:20%;

    
`;
const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  alighn-items:center;
`;

const StyledP = styled.p`
color: black;
  font-weight: bold;
  font-size:1.5rem;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  white-space: nowrap;`;

const FallBack = () => {
  return (
    <StyledDiv>
      <Header>OOPS!!</Header>
      <StyledP>Currently you cannot view this page offline</StyledP>

     <StyledButton href="/">Go to Homepage</StyledButton>
  
    </StyledDiv>
  );
};
export default FallBack;
