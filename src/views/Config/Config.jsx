import React from "react";
import { useHistory } from "react-router-dom";
import Allergies from "../Allergies/Allergies";
import HealthConditions from "../HealthConditions/HealthConditions"
import styled from "styled-components";
import Preferences from "../Preferences";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Config = (props) => {
  const { isChecked } = props;

  const history = useHistory();

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="allergies"> Add Allergies</label>
        <input
          checked={isChecked ? true : false}
          id="allergies"
          type="checkbox"
          value="allergies"
          onChange={() => {
            return (
              (<Allergies inputId={"allergies"} />),
              history.push("/config/allergies")
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="healthconditions"> Add Health Conditions</label>
        <input
          checked={isChecked ? true : false}
          id="healthconditions"
          type="checkbox"
          value="health conditions"
          onChange={() => {
            return (
              (<HealthConditions inputId={"healthconditions"} />),
              history.push("/config/healthconditions")
            );
          }}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="preferences"> Add Preferences</label>
        <input
          checked={isChecked ? true : false}
          id="preferences"
          type="checkbox"
          value="preferences"
          onChange={() => {
            return (
              (<Preferences inputId={"preferences"} />),
              history.push("/config/preferences")
            );
          }}
        />
      </InputWrapper>
    </Wrapper>
  );
};
export default Config;
