// import { SportsRugbySharp } from "@material-ui/icons"

export const spacing = {
  none: "0",
  xs: "0.25rem",
  s: "0.5rem",
  m: "1rem",
  l: "2rem",
  xl: "3rem",
};

export const colors = {
  brand: "34A853",
  error: "#93373F",
};
export const shades = {
  green: {
    none: "rgba(52, 168, 83, 0)",
    lighter: "rgba(52, 168, 83, 0.1)",
    light: "rgba(52, 168, 83, 0.25)",
    medium: "rgba(52, 168, 83, 0.5)",
    heavy: "rgba(52, 168, 83, 0.75)",
    heavier: "rgba(52, 168, 83, 0.90)",
    solid: "rgba(52, 168, 83, 1)",
  },
  black: {
    none: "rgba(0, 0, 0, 0)",
    lighter: "rgba(0, 0, 0, 0.1)",
    light: "rgba(0, 0, 0, 0.25)",
    medium: "rgba(0, 0, 0, 0.5)",
    heavy: "rgba(0, 0,0 , 0.75)",
    heavier: "rgba(0, 0,0 , 0.90)",
    solid: "rgba(0, 0, 0, 1)",
  },
};

export const highlights = {
  white: {
    none: "rgba(255, 255, 255, 0)",
    lighter: "rgba(255, 255, 255, 0.1)",
    light: "rgba(255, 255, 255, 0.25)",
    medium: "rgba(255, 255, 255, 0.5)",
    heavy: "rgba(255, 255,255 , 0.75)",
    heavier: "rgba(255, 255,255 , 0.90)",
    solid: "rgba(255, 255, 255, 1)",
  },
};

export const radius = {
  none: "0",
  s: "4px",
  m: "8px",
  l: "27px",
};
export const fontSize = {
  s: {
    size: "0.875rem",
    height: "110%",
    weight: "400",
    spacing: "1%",
  },
  m: {
    size: "1rem",
    weight: "400",
    spacing: "0",
    height: "100%",
  },
  l: {
    size: "1,125rem",
    weight: "700",
    spacing: "-1%",
    height: "95%",
  },
  xl: {
    size: "3rem",
    weight: "900",
    spacing: "-2%",
    height: "90%",
  },
};
export const fontFamily = {
  general: 'Roboto, Arial, Helvetica,"Helvetica Neue", sans-serif',
};

export const fontWeight = {
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
};
export const letterSpacing = {
  s: "0.15px",
  m: "0",
  l: "-0.5px",
  xl: "-1px",
};
export const images = {
  xs: "0.875rem",
  s: "4rem",
  m: "8rem",
  l: "13rem",
};
const opacity = {
  none: "0",
  subtler: "10%",
  subtle: "25%",
  medium: "50%",
  strong: "75%",
  stronger: "90%",
  solid: "100%",
};

export const tokens = {
  spacing,
  colors,
  shades,
  highlights,
  radius,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  images,
  opacity,
};

export default tokens;
