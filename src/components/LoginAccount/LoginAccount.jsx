import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoTrue from "gotrue-js";

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

const Wrapper = styled.div`
  padding: 1rem;
`;

//  const auth = new goTrue({
//   auth.login(email, password, remember)
//    .login(email.value, password.value, true)
//    .then((response) => {
//      showMessage(`Success! Response: ${JSON.stringify({ response })}`, form);
//   })
//   .catch((error) => showMessage(`Failed :( ${JSON.stringify(error)}`, form));
// });
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
        <h1>Login Account</h1>
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
            <button>Submit</button>
          </Wrapper>
        </form>
      </div>
    </div>
  );
};
export default LoginAccount;
