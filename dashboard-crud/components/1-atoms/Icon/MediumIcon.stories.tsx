import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import MediumIcon from "./MediumIcon";

export default {
  title: "Atoms/MediumIcon",
  component: MediumIcon,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof MediumIcon>;

const Template: ComponentStory<typeof MediumIcon> = (args) => (
  <MediumIcon {...args} />
);

export const DarkMode = Template.bind({});
DarkMode.args = {
  as: Brightness6,
};

export const LightMode = Template.bind({});
LightMode.args = {
  as: BrightnessMedium,
};
