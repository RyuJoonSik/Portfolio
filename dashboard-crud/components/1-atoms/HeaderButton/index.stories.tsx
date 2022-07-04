import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DarkModeButton from ".";

export default {
  title: "Atoms/DarkModeButton",
  component: DarkModeButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = () => (
  <DarkModeButton />
);

export const Default = Template.bind({});
