import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box
}
body{
    overflow-x: hidden;
    overflow-y:scroll;
    font-family: Arial, sans-serif;
    padding: 0 0 8rem 0!imporant;
    margin: 0 !imporant;
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
