import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/Tokens";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

const calcColor = ({ inverse }) => {
  if (inverse) return tokens.highlights.white.solid;
  return tokens.shades.black.heavier;
 
};

const Base = styled.div`
  &&& {
    min-height: 100vh;
    background: ${tokens.shades.green.solid};
    display: flex;
    flex-direction: column;
    padding: ${tokens.spacing.xl} ${tokens.spacing.l};
  }
`;

const Padded = styled.div`
  padding: ${tokens.spacing.xl} ${tokens.spacing.l};
  font-size: ${tokens.fontSize.xl};
`;

const ButtonWrap = styled.div`
  padding: 0.25rem 0;
  color:${tokens.colors.calcColorj};
`;

const Content = styled.div`
  flex-grow: 1;
`;

export const HomePage = () => {
  return (
    <Base full>
      <Content>
        <Padded>
          <Title inverse>Eazy Meals</Title>
        </Padded>
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
    </Base>
  );
};

export default HomePage;
