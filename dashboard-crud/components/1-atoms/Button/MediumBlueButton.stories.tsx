import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MediumBlueButton from "./MediumBlueButton";

export default {
  title: "Atoms/MediumBlueButton",
  component: MediumBlueButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof MediumBlueButton>;

const Template: ComponentStory<typeof MediumBlueButton> = () => (
  <MediumBlueButton />
);

export const Default = Template.bind({});
