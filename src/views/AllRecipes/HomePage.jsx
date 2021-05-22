import React from "react";
import styled from "styled-components";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Button } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 4em;
  color: white;
`;

const Wrapper = styled.nav`
  padding: 4em;
  background: #34a853;
  border: 15px solid #f3f5f6;
  border-radius: 15px;
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
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #34a853;
    color: white;
    font-weight: 600;
    margin: 2rem 8rem 0 8rem;

    text-align: center;
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

      <Text>
        <EmojiFoodBeverageIcon />
        Convert ingredients into recipes
      </Text>

      <Title>OR</Title>

      <Text>
        <MenuBookIcon />
        Convert recipes into shopping lists
      </Text>

      <Section>
        <StyledButton size="large" variant="contained" href="/homepage/signup">
          CREATE ACCOUNT
        </StyledButton>
        <StyledButton size="large" href="/homepage/login">
          SIGN IN
        </StyledButton>
      </Section>
    </Container>
  );
};

export default HomePage;
