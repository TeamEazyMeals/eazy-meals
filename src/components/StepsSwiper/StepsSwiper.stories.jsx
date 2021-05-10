import StepSwiper from "./StepsSwiper";
import faker from "faker";

const config = {
  title: "StepSwiper",
};

const mockSteps = new Array(12).fill(null).map(() => ({
  description: faker.lorem.paragraph(),
  timerInMinutes:
    faker.datatype.boolean() && faker.datatype.number({ min: 4, max: 200 }),
}));

export default config;

const Default = () => <StepSwiper steps={mockSteps} />;

export { Default };
