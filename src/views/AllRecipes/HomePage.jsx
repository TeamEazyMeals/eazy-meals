import React from "react";
import styled from "styled-components";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Button } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 4em;
  color: white;
`;

const Wrapper = styled.nav`
  padding: 4em;
  background: #34a853; ;
`;

const Title = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: #2c323a;
  text-align: center;
`;

const Section = styled.section`
  display: flex;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #34a853;
    color: white;
    font-weight: 600;
    margin-top: 1rem;
  }
`;
const Text = styled.p`
  color: #2c323a;
`;

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Header>EAZY MEALS</Header>
      </Wrapper>
      <Section>
        <Text>
          <EmojiFoodBeverageIcon />
          Convert ingredients into recipes
        </Text>
      </Section>
      <Title>OR</Title>
      <Section>
        <Text>
          <MenuBookIcon />
          Convert recipes into shopping lists
        </Text>
      </Section>
      <StyledButton variant="contained" href="/homepage/signup">
        CREATE ACCOUNT
      </StyledButton>
      <StyledButton href="/homepage/login">SIGN IN</StyledButton>
    </Container>
  );
};

export default HomePage;
