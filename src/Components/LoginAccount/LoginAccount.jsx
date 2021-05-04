import React, { useState, useEffect } from "react";
import GoTrue from "gotrue-js";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
`;
const LoginAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = async (event) => {
    console.log("success", email, password);
  };

  return (
    <div>
      <div>
        <h1>Create Account</h1>
        {message && <div>{message}</div>}
        <form onSubmit={handleSubmit}>
          <Wrapper>
            <input
              type="email"
              name="email"
              placeholder="email.."
              required
              value={email}
              onChange={handleEmail}
            />
          </Wrapper>
          <Wrapper>
            <input
              type="password"
              name="password"
              placeholder="password.."
              required
              value={password}
              onChange={handlePassword}
            />
          </Wrapper>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAccount;
