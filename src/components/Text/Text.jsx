import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/Tokens";
import { Typography as StyledTypography } from "@material-ui/core";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  black: `rgb(${tokens.colors.black})`,
  blackMedium: `rgba(${tokens.colors.black}, ${tokens.opacity.medium})`,
  blackStronger: `rgba(${tokens.colors.black}, ${tokens.opacity.stronger})`,
  blackStrong: `rgba(${tokens.colors.black}, ${tokens.opacity.strong})`,
  whiteStrong: `rgba(${tokens.colors.white}, ${tokens.opacity.strong})`,
  whiteStronger: `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})`,
};

const calcColor = ({ fontSize, $inverse }) => {
  if ((fontSize === "xl" || fontSize === "l ") && $inverse) return COLORS.white;
  if (fontSize === "xl" || fontSize === "l") return COLORS.blackStronger;
  if (fontSize === "m" && $inverse) return COLORS.whiteStronger;
  if (fontSize === "m") return COLORS.blackStrong
  if ($inverse) return COLORS.whiteStrong
  return COLORS.blackMedium;
};

const lineClampCss = (number) => `
display: -webkit-box;
-webkit-line-clamp: ${number};
-webkit-box-orient: vertical;
overflow: hidden;
`

// const StyledTypography = styled(Typography)`
//   font-size: ${({ fontSize }) => tokens.text[fontSize].fontSize};
//   font-weight: ${({ fontSize }) => tokens.text[fontSize].weight};
//   line-height: ${({ fontSize }) => tokens.text[fontSize].height};
//   letter-spacing: ${({ fontSize }) => tokens.text[fontSize].spacing};
//   ${({ lines }) => lines > 1 ? lineClampCss(lines) : ''}
//   color: ${calcColor};
// `;
/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'s' | 'm' | 'l' | 'xl'} fontSize
 * @property {boolean} inverse
 * @property {number} [lines]
 * @property {'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'| 'h6'}  component
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */
export const Text = (props) => {
  const {inverse, ...remainingProps} = props;
  return <StyledTypography {...remainingProps} $inverse={inverse}/>;
};
export default Text;
