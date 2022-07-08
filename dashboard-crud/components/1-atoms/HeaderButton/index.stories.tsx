import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderButton from ".";

export default {
  title: "Atoms/HeaderButton",
  component: HeaderButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = (args) => (
  <HeaderButton {...args} />
);

export const Default = Template.bind({});
