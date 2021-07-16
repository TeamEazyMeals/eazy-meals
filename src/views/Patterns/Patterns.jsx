import React from "react";
import styled from "styled-components";

import { tokens } from "../../data/Tokens/tokens";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

const InverseContainer = styled.div`
  background: ${tokens.shades.green.solid};
  padding: ${tokens.spacing.m};
`;

export const Patterns = () => {
  return (
    <div>
      <h1>Patterns</h1>
      <h2>Titles</h2>
      <div>
        <Title component="h3">Default Title</Title>
        <InverseContainer>
          <Title component="h3" inverse>
            Inverted Title
          </Title>
        </InverseContainer>
      </div>

      <h2>Buttons</h2>
      <div>
        <Button importance="primary">Hello</Button>
        <Button>World!</Button>
        <InverseContainer>
          <Button importance="primary" inverse>
            Hello World
          </Button>
          <Button inverse>Hello!</Button>
        </InverseContainer>
      </div>

      <h2>Text</h2>
      <Text inverse size="l" importance="secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        obcaecati ab eligendi, sapiente..
      </Text>
    </div>
  );
};

export default Patterns;
