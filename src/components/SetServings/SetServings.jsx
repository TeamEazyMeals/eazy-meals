import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { tokens } from "../../data/Tokens";
const Serve = styled.span`
font-size: 15px;
  padding:1rem;
  
`;
const Content = styled.div`
  display: flex;
  justify-content: center;

`;


function SetServings(props) {
  const { count, setCount } = props;

  return (
    <div>
      <Content>
        <Button
          variant="contained"
          color="primary"
          style={{ justifyContent: "center" }} 
          disabled={count === 1}
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
    </div>
  );
}

export default SetServings;
