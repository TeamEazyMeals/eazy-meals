import React from "react";
import styled from "styled-components";
// import { faker } from "faker";
// import { fakerE } from "faker";
// import { User } from "./SignIn.User";
import { tokens } from "../../../data/Tokens";
import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";

const Base = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Padded = styled.div`
  padding: ${tokens.spacing.l} ${tokens.spacing.l} ${tokens.spacing.xl};
`;
const ButtonWrap = styled.div`
  padding: 0.25rem 0;
`;
const Content = styled.div`
  flex-grow: 1;
`;

// const MOCK_USERS = fakerE.array([1, 6], () => ({
//   console.log(MOCK_USERS),
//   id: faker.datatype.uuid(),
//   name: faker.name.findName(),
//   activity: faker.date.past(),
//   image: faker.image.avatar(),
  

// }));

export const UserSelect = () => {
  return (
    <Base>
      <Padded>
        <Title inverse>Sign In</Title>
      </Padded>
      <Content>
        {/* {MOCK_USERS.map((singleUser) => (
          <User key={singleUser.id} {...singleUser} />
        ))} */}
      </Content>
      <Padded>
        <ButtonWrap>
          <Button full>Cancel</Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button full importance="primary">
            Enter Email
          </Button>
        </ButtonWrap>
      </Padded>
    </Base>
  );
};

export default UserSelect;
