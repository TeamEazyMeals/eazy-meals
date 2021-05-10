import React from "react";
// import Button from "@material-ui/core/Button";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import MobileStepper from "@material-ui/core/MobileStepper";

//  const StepsSwiper = (props) => {
//   console.log(props);
//   const { recipe } = props;
//   const theme = useTheme();

//   const forwardButton = () => {
//     setActiveStep((props) => props - 1);
//   };
//   const [INDEX, setActiveStep] = React.useState(0);

//   const previousButton = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };
//   return (
//     <div
//       style={{
//         marginLeft: "40%",
//       }}
//     >
//       <MobileStepper
//         steps={5}
//         variant="dots"
//         style={{
//           flexGrow: 1,
//           maxWidth: 400,
//         }}
//         activeStep={INDEX}
//         position="static"
//         nextButton={
//           <Button size="small" onClick={previousButton} disabled={INDEX === 4}>
//             Next
//             {theme.direction !== "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={forwardButton} disabled={INDEX === 0}>
//             {theme.direction !== "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//             Back
//           </Button>
//         }
//       />
//       <h3>Page No: {INDEX + 1}</h3>
//     </div>
//   );
// };
const StepsSwiper = (props) => {
  const { steps } = props;
  return (
    <div>
      {steps.map(({ description, timerInMinutes }) => (
        <div>
          {description}-{timerInMinutes}
        </div>
      ))}
    </div>
  );
};

export default StepsSwiper;
