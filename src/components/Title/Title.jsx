import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { tokens } from "../../data/Tokens/tokens";

const calcColor = ({ inverse }) => {
  if (inverse) return tokens.highlights.white.solid;
  return tokens.shades.black.heavier;
}
const Base = styled(Typography)`
font-size: ${tokens.fontSize.x1};
font-weight: ${tokens.fontWeight.black};
letter-spacing: ${tokens.letterSpacing.xl};
text-align: center;
color: ${calcColor};

`;


export const Title = (props) => {
  const { children, component = 'h1'} = props;
  return <Base component={component}>{children}</Base>;
};

export default Title;
