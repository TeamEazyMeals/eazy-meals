import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function SetServings(props) {
 
  const { count, setCount } = props;

  const Serve = styled.span`
  font-size: 15px;
    padding:1rem;
    background-colour;grey;
    
  `;
  const Content = styled.ul`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <Content>
        <Button
          variant="contained"
          color="primary"
          style={{ justifyContent: "center" }}
          disabled={count ===1 }
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <Serve> {count}</Serve>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Content>
    </>
  );
}

export default SetServings;
