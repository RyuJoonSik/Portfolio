import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import DarkModeButton from ".";

export default {
  title: "Molecules/DarkModeButton",
  component: DarkModeButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = () => (
  <DarkModeButton />
);

export const DarkMode = Template.bind({});

DarkMode.args = {
  name: "다크 모드",
  Icon: Brightness6,
};
