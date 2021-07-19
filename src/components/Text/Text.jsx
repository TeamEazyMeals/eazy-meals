import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { tokens } from "../../data/Tokens";

const calcColor = ({ inverse, importance }) => {
  if (inverse && importance === "primary") {
    return tokens.highlights.white.solid;
  }
  if (inverse) {
    return tokens.highlights.white.heavy;
  }
  if (importance === "primary") {
    return tokens.highlights.black.heavy;
  }
  return tokens.shades.black.medium;
};
const FONT_WEIGHT_MAP = {
  s: tokens.fontWeight.regular,
  m: tokens.fontWeight.regular,
  l: tokens.fontWeight.bold,
}
const Base = styled(Typography)`
  font-size: ${({ size }) => tokens.fontSize[size]};
  letter-spacing: ${({ size }) => tokens.letterSpacing[size]};
  color:${calcColor};
  font-weight: ${({ size }) => tokens.FONT_WEIGHT_MAP[size]};
`;

export const Text = (props) => {
  const { children, inverse = false, importance = "primary",size = "m" } = props;
  return <Base variant="p" size={size} children={children} inverse={inverse} importance={importance} />
};

export default Text;
