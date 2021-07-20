import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";
import { tokens } from "../../data/Tokens";

const calcBackground = ({ inverse, importance }) => {
  if (inverse && importance === "primary") return tokens.highlights.white.solid;
  if (importance === "primary") return tokens.shades.green.solid;
  return tokens.highlights.white.none;
};
const calcHover = ({ inverse, importance }) => {
  if (inverse && importance === "primary") {
    return tokens.highlights.white.heavier;
  }
  if (importance === "primary") return tokens.shades.green.heavier;
  if (inverse) return tokens.highlights.white.lighter;
  return tokens.shades.green.lighter;
};

const calcColor = ({ inverse, importance }) => {
  if (
    (inverse && importance === "primary") ||
    (!inverse && importance !== "primary")
  ) {
    return tokens.shades.green.solid;
  }
  return tokens.highlights.white.solid;
};

const calcBorder = ({ inverse, importance }) => {
  if (importance === "primary") {
    return `0 solid ${tokens.highlights.none}`;
  }
  if (inverse) return `1px solid ${tokens.highlights.white.medium}`;
  return `1px solid ${tokens.colors.brand}`;
};
const Base = styled(MuiButton)`
  color: ${calcColor};
  border: ${calcBorder};
  background: ${calcBackground};
  white-space: nowrap;
  width: ${({ full }) => (full ? "100%" : "auto")};

  &:hover {
    background: ${calcHover};
  }
`;

export const Button = (props) => {
  const {
    full,
    childern,
    importance = "secondary",
    onClick,
    href,
    inverse,
  } = props;

  if (href && onClick) {
    throw new Error('can\'t have both "onClick" and "href"');
  }
  const component = href ? "a" : "button";
  const variant = importance === "primary" ? "contained" : "outlined";

  return (
    <Base
      size="large"
      component={component}
      variant={variant}
      inverse={inverse}
      full={full}
      importance={importance}
    >
      {childern}
    </Base>
  );
};

export default Button;
