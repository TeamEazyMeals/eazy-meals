import React from "react";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import MobileStepper from "@material-ui/core/MobileStepper";
import styled from "styled-components";
import Timer from "../Timer/Timer";

const Container = styled.div`
  justify-content: center;
`;

const StepsSwiper = (props) => {
  const { steps = [] } = props;

  const theme = useTheme();

  const forwardButton = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [INDEX, setActiveStep] = React.useState(0);

  const previousButton = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <Container
      style={{
        marginLeft: "40%",
      }}
    >
      <MobileStepper
        steps={10}
        variant="dots"
        style={{
          flexGrow: 1,
          maxWidth: 400,
        }}
        activeStep={INDEX}
        position="static"
        nextButton={
          <Button size="small" onClick={previousButton} disabled={INDEX === 9}>
            Next
            {theme.direction !== "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={forwardButton} disabled={INDEX === 0}>
            {theme.direction !== "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
            Back
          </Button>
        }
      />
      <p>{steps[INDEX]}</p>
      <Timer />
    </Container>
  );
};

export default StepsSwiper;
