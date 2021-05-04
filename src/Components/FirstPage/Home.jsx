import React from "react";
import styled from "styled-components";
import LoginAccount from "../LoginAccount/LoginAccount";

const Wrapper = styled.div`
padding: 16px 32px
margin: 4px 2px;
cursor: pointer;;
`;
const handleSubmit = async (event) => {
   LoginAccount()
}
const Home = () => {
  return (
    <div>
      <div>
        <h1>Eazy Meals</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          dicta similique hic repellendus vero corporis aut ullam, eum,
          asperiores exercitationem officia deserunt! Exercitationem,
          consequatur aperiam eius cupiditate minus quae perspiciatis?
        </p>
      </div>

      <Wrapper>
        <form>
          <button onClick={handleSubmit}>Sign In</button>
          <button>Create Account</button>
        </form>
      </Wrapper>
    </div>
  );
};

export default Home;
