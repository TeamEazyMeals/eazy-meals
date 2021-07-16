import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/Tokens";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button/Button";

const Base = styled.div`
  min-height: 100vh;
  background: ${tokens.shades.green.solid};
  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.xl} ${tokens.spacing.l};
`;
const Padded = styled.div`
  padding: ${tokens.spacing.l} ${tokens.spacing.l};
  color: ${tokens.highlights.white.heavy}; 

`;
const ButtonWrap = styled(Button)`
  padding: 0.25rem 0;
  
`;
// const Content = styled.div`
//   flex-grow: 3;
// `;

export const HomePage = () => {
  return (
    <Base>
      <Padded>
          <Title inverse>Eazy Meals</Title>
      </Padded>
    
      <ButtonWrap>
        <Button full inverse>
          Sign In
        </Button>
      </ButtonWrap>
      <ButtonWrap>
        <Button full inverse importance="primary">
          Create Account
        </Button>
      </ButtonWrap>
    </Base>
  );
};

export default HomePage;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.h1`
//   color: white;
//   font-family: Roboto;
//   font-size: 64px;
//   font-style: normal;
//   font-weight: 900;
//   line-height: 66px;
//   letter-spacing: 0px;
//   text-align: center;
// `;
// const HeaderWrapper = styled.div`

//   background-color: white;
//   width: 40em;
//   display:flex;
//   align-items:center;
// `;

// const Wrapper = styled.nav`
//   background: #34a853;
//   margin-bottom: 4em;
//   width:100em;
// `;

// const Title = styled.h3`
//   font-family: Roboto;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 17px;
//   color: #61768f;
//   text-align: center;
//   margins: 0;
// `;

// const CreateAccountButton = styled(Button)`
//   && {
//     width: 256px;
//     height: 48px;
//     font-weight: 700;
//     background: #34a853;
//     border: 1px solid #34a853;
//     border-radius: 3px;
//     color: white;
//     margin-bottom: 2rem;
//   }
// `;

// const SignInButton = styled(Button)`
//   && {
//     height: 48px;
//     width: 256px;
//     border: 1px solid #34a853;
//     color: #34a853;
//     font-weight: 700;
//     border-radius: 3px;
//     background: rgba(52, 168, 83, 0.1);
//   }
// `;

// const ButtonsDiv = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 3rem;
// `;

// const IconTextWrap = styled.div`
//   margin-top: 1rem;
//   display: flex;
//   width: 100%;
//   max-width: 600px;
//   justify-content: center;
// `;
// const Text = styled.p`
//   font-family: Roboto;
//   font-size: 14px;
//   font-style: italic;
//   font-weight: 400;
//   line-height: 17px;
//   letter-spacing: 0em;
//   text-align: left;
//   color: #61768f;
// `;

// const TitleWrap = styled.div`
//   margin: -2rem;
//   display: flex;
//   width: 100%;
//   max-width: 600px;
//   align-items: center;

// `;

// const Line = styled.div`
//   height: 1px;
//   width: 50%;
//   margin: 3rem;
//   background-color: #b9c5ca;
// `;

// const IconCircle = styled.div`
//   height: 55px;
//   width: 55px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 1rem;
//   border-radius: 50%;
//   border: 1px solid #b9c5ca;
//   color: #61768f;
// `;

// const HomePage = () => {
//   return (
//     <Container>
//       <HeaderWrapper>
//         <Wrapper>
//           <Header>EAZY MEALS</Header>
//         </Wrapper>
//       </HeaderWrapper>

//       <IconTextWrap>
//         <IconCircle>
//           <EmojiFoodBeverageIcon />
//         </IconCircle>
//         <Text>Convert ingredients into recipes</Text>
//       </IconTextWrap>

//       <TitleWrap>
//         <Line />
//         <Title>OR</Title>
//         <Line />
//       </TitleWrap>

//       <IconTextWrap>
//         <IconCircle>
//           <MenuBookIcon />
//         </IconCircle>
//         <Text>Convert recipes into shopping lists</Text>
//       </IconTextWrap>
//       <ButtonsDiv>
//         <CreateAccountButton
//           size="large"
//           variant="contained"
//           href="/homepage/signup"
//         >
//           CREATE ACCOUNT
//         </CreateAccountButton>
//         <SignInButton size="large" href="/homepage/login">
//           SIGN IN
//         </SignInButton>
//       </ButtonsDiv>
//     </Container>
//   );
// };

// export default HomePage;
