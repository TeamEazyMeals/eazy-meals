import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";
<<<<<<< HEAD
import { tokens } from "../../data/tokens";
import { Link } from "react-router-dom";
// import "../../types/action";
=======
import { tokens } from "../../data/Tokens";
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  green: `rgb(${tokens.colors.green})`,
  black: `rgb(${tokens.colors.black})`,
  none: `transparent`,
  greenSubtler: `rgba(${tokens.colors.green}), ${tokens.opacity.subtler}`,
  greenStronger: `rgba(${tokens.colors.green}), ${tokens.opacity.stronger}`,
  whiteSubtler: `rgba(${tokens.colors.white}), ${tokens.opacity.subtler}`,
  whiteStronger: `rgba(${tokens.colors.white}), ${tokens.opacity.stronger}`,
};

const calcBackground = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.white;
  if ($inverse || importance === "secondary") return COLORS.none;
  return COLORS.green;
};
const calcColor = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.green;
  if ($inverse || importance === "primary") return COLORS.white;
  return COLORS.green;
};
const calcBorder = ({ importance, $inverse }) => {
  if (importance === "primary") return `1px solid ${COLORS.none}`;
  if ($inverse) return `1px solid ${COLORS.white}`;
  return `1px solid ${COLORS.green}`;
};
const calcHover = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.whiteStronger;
  if ($inverse) return COLORS.whiteSubtler;
  if (importance === "primary") return COLORS.greenStronger;
  return COLORS.greenSubtler;
};

<<<<<<< HEAD
const calcActionProps = (action,detail) => {
  if (action === true) {
    return {
      type: "submit"
    };
=======
const calcColor = ({ inverse, importance }) => {
  if (
    (inverse && importance === "primary") ||
    (!inverse && importance !== "primary")
  ) {
    return tokens.shades.green.solid;
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d
  }

<<<<<<< HEAD
  if (!action) {
    return {
      // disabled: true,
      type: "button"
    };
  }
  if (typeof action !== "string")
    return { component: "button", onClick: action, type: "button" };

  return { component: Link, to: {pathname:action,state:detail},type: "button" };
};

const StyledButton = styled(MuiButton)`
=======
const calcBorder = ({ inverse, importance }) => {
  if (importance === "primary") {
    return `0 solid ${tokens.highlights.none}`;
  }
  if (inverse) return `1px solid ${tokens.highlights.white.medium}`;
  return `1px solid ${tokens.colors.brand}`;
};
const Base = styled(MuiButton)`
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d
  color: ${calcColor};
  background: ${calcBackground};
<<<<<<< HEAD
  border: ${calcBorder};
  padding: ${tokens.spacing.s};
=======
  white-space: nowrap;
  width: ${({ full }) => (full ? "100%" : "auto")};
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d
  &:hover {
    background: ${calcHover};
  }
`;
/**
 * @typedef {object} props
 * @property {JSX.Elements} children
 * @property {'primary' | 'secondary'} importance
 * @property {boolean}  inverse
 * @property {} action
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Button = (props) => {
  const {
<<<<<<< HEAD
    children,
   inverse,
=======
    full,
    children,
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d
    importance = "secondary",
    action,
    full = false,
  } = props;
  const variant = importance === "primary" ? "contained" : "outlined";
  const actionProps = calcActionProps(action);
  return (
    <StyledButton
      importance={importance}
<<<<<<< HEAD
      children={children}
      fullWidth={full}
      $inverse={inverse}
      variant={variant}
      {...actionProps}
    />
=======
    >
      {children}
    </Base>
>>>>>>> 19344f65dfd8f6bf43e892c231bbcff0f2a41b6d
  );
};
export default Button;
