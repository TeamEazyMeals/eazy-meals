import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box
}

/* Roboto regular */

@font-face {
    font-family: "Roboto";
    src:
         url("/fonts/roboto/400.ttf") format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: "Roboto";
    src:
         url("/fonts/roboto/400.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: "Roboto";
    src:
         url("/fonts/roboto/400.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: "Roboto";
    src:
         url("/fonts/roboto/400.ttf") format('truetype');
    font-weight: 700;
    font-style: normal;
}

body{
    overflow-x: hidden;
    overflow-y:scroll;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    padding: 0 0 8rem;
    margin: 0;
}
`;

const Global = (props) => {
  const { children } = props;
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};
export default Global;
