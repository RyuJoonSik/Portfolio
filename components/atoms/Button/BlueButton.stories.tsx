import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlueButton from "./BlueButton";

export default {
  title: "Atoms/Button/BlueButton",
  component: BlueButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BlueButton>;

const Template: ComponentStory<typeof BlueButton> = () => (
  <>
    <BlueButton>BlueButton</BlueButton>
  </>
);

export const Default = Template.bind({});
