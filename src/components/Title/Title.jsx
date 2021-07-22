import React from "react";
import styled from "styled-components";
import { StylesProvider } from '@material-ui/styles';
import { Typography } from "@material-ui/core";
import { tokens } from "../../data/Tokens";

const calcColor = ({ inverse }) => {
  if (inverse) return tokens.highlights.white.solid;
  return tokens.shades.black.heavier;
};
const Base = styled(Typography)`
font-size: ${tokens.fontSize.xl};
font-weight: ${tokens.fontWeight.black};
letter-spacing: ${tokens.letterSpacing.xl};
color: ${calcColor};
text-align: center;
  
`;

export const Title = (props) => {
  const { children, component = "h1", inverse } = props;
  return (
    <StylesProvider injectFirst>
      <Base size="large"component={component} inverse={inverse}>
      {children}
    </Base>
    </StylesProvider>
    
  );
};

export default Title;
