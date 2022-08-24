import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DarkModeButton from "./DarkModeButton";

export default {
  title: "Modules/Button/DarkModeButton",
  component: DarkModeButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = () => (
  <DarkModeButton />
);

export const Default = Template.bind({});
