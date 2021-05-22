import React from "react";
import styled from "styled-components";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import {useHistory} from "react-router-dom"
const Header = styled.h1`
  font-size: 5em;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #34a853; ;
`;
const Title = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const HomePage = () => {
  const history = useHistory()
  return (
    <div>
      <Wrapper>
        <Header>EAZY MEALS</Header>
      </Wrapper>
      <EmojiFoodBeverageIcon />
      <h4>Convert ingredients into recipes</h4>
      <button onClick={() => history.push("/homepage/signup")}>
        CREATE ACCOUNT
      </button>
      <button onClick={() => history.push("/homepage/login")}>
        SIGN IN
      </button>
    </div>
  );
};

export default HomePage;
