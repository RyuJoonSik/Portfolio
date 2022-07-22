import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import HeaderButtonContainer from "./HeaderButtonContainer";
import MediumBlueButton from "../Button/MediumBlueButton";
import MediumIcon from "../Icon/MediumIcon";

export default {
  title: "Atoms/HeaderButtonContainer",
  component: HeaderButtonContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderButtonContainer>;

const Template: ComponentStory<typeof HeaderButtonContainer> = () => (
  <HeaderButtonContainer>
    <MediumBlueButton>
      <MediumIcon as={Brightness6} />
      테스트1
    </MediumBlueButton>
    <MediumBlueButton>테스트1</MediumBlueButton>
    <MediumBlueButton>
      <MediumIcon as={Brightness6} />
    </MediumBlueButton>
    <MediumBlueButton>
      <MediumIcon as={Brightness6} />
      테스트테스트테
    </MediumBlueButton>
  </HeaderButtonContainer>
);

export const Default = Template.bind({});
