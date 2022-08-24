import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedButtonsBox from "./FixedButtonsBox";

export default {
  title: "Modules/Box/FixedButtonsBox",
  component: FixedButtonsBox,
} as ComponentMeta<typeof FixedButtonsBox>;

const Template: ComponentStory<typeof FixedButtonsBox> = () => (
  <FixedButtonsBox />
);

export const Default = Template.bind({});
