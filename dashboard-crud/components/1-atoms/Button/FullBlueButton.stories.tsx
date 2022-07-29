import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullBlueButton from "./FullBlueButton";

export default {
  title: "Atoms/FullBlueButton",
  component: FullBlueButton,
} as ComponentMeta<typeof FullBlueButton>;

const Template: ComponentStory<typeof FullBlueButton> = () => (
  <FullBlueButton />
);

export const Default = Template.bind({});
