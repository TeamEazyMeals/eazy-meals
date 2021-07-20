import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/Tokens";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

const Base = styled.div`
  min-height: 100vh;
  background: ${tokens.shades.green.solid};
  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.xl} ${tokens.spacing.l};
`;

const ButtonWrap = styled.div`
  padding: 0.25rem 0;
`;
const Content = styled.div`
  flex-grow: 1;
`;

export const HomePage = () => {
  return (
    <div>
      <Content>
        
          <Title inverse>Eazy Meals</Title>
        
      </Content>

      <ButtonWrap>
        <Button full inverse>
          Sign In
        </Button>
      </ButtonWrap>
      <ButtonWrap>
        <Button full inverse importance="primary">
          Create Account
        </Button>
      </ButtonWrap>
    </div>
  );
};

export default HomePage;
