import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderButtonsBox from "./HeaderButtonsBox";

export default {
  title: "Organisms/HeaderButtonsBox",
  component: HeaderButtonsBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderButtonsBox>;

const Template: ComponentStory<typeof HeaderButtonsBox> = () => (
  <HeaderButtonsBox />
);

export const Default = Template.bind({});
