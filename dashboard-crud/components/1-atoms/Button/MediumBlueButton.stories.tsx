import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MediumBlueButton from "./MediumBlueButton";

export default {
  title: "Atoms/MediumBlueButton.Button",
  component: MediumBlueButton.Default,
} as ComponentMeta<typeof MediumBlueButton.Default>;

const Template: ComponentStory<typeof MediumBlueButton.Default> = () => (
  <MediumBlueButton.Default />
);

export const Default = Template.bind({});
