import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoTrue from "gotrue-js";
import Faker from "Faker";

const UserName = (props) => {
  const [user, setUser] = useState(false);

  async function userData() {
    setUser(!user);
  }

  const useEffect = () => {
    return userData, [];
  };

  if (!user) {
    return "Incorrect Loggin";
  }
};

const auth = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});
const Wrapper = styled.div`
  padding: 1rem;
`;
const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = async (event) => {
    console.log("success", email, password);
    const fakeToken = {
      access_token: "example-jwt-token",
      token_type: "bearer",
      expires_in: 3600,
      refresh_token: "example-refresh_token",
      expires_at: 1526062471000,
    };
    window.sessionStorage.setItem("token", JSON.stringify(fakeToken));
    const retrievedToken = window.sessionStorage.getItem("token");
    fetch("/example", {
      headers: { Authorization: `Bearer ${retrievedToken.access_token}` },
    });
    try {
      setMessage("Logging in...");
      event.preventDefault();
      const response = await auth.login(email, password);
      if (response.description) setMessage(response.description);
      if (response.token) {
        window.sessionStorage("token", JSON.stringify(response.token));
      }
    } catch (error) {
      setMessage(error.toString());
    }
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
          <Wrapper type="submit" required onClick={handleSubmit}>
            <button>Cancel</button>
            <button>Create</button>
          </Wrapper>
        </form>
      </div>
    </div>
  );
};
export default CreateAccount;
