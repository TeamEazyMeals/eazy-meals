import StepsSwiper from "./StepsSwiper";
import faker from "faker";

const config = {
  title: "StepsSwiper",
};
export default config;

const mockSteps = new Array(12).fill(null).map(() => ({
  description: faker.lorem.paragraph(),
  timerInMinutes:
    faker.datatype.boolean() && faker.datatype.number({ min: 4, max: 200 }),
}));
console.log(mockSteps)
const Default = () => <StepsSwiper  />

export { Default };
