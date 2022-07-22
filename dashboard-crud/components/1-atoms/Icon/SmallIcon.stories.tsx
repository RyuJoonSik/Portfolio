import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import SmallIcon from "./SmallIcon";

export default {
  title: "Atoms/SmallIcon ",
  component: SmallIcon,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SmallIcon>;

const Template: ComponentStory<typeof SmallIcon> = (args) => (
  <SmallIcon {...args} />
);

export const DarkMode = Template.bind({});
DarkMode.args = {
  as: Brightness6,
};

export const LightMode = Template.bind({});
LightMode.args = {
  as: BrightnessMedium,
};
