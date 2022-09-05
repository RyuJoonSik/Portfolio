import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlueButton from "./BlueButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/BlueButton",
  component: BlueButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BlueButton>;

const Template: ComponentStory<typeof BlueButton> = (args) => (
  <CustomContainer gap="medium">
    <BlueButton {...args}>Default</BlueButton>
    <BlueButton hasHover={true}>Hover</BlueButton>
    <BlueButton hasActive={true}>Active</BlueButton>
    <BlueButton hasHover={true} hasActive={true}>
      Hover, Active
    </BlueButton>
  </CustomContainer>
);

export const Default = Template.bind({});
