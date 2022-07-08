import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderIcon from ".";

export default {
  title: "Atoms/HeaderIcon",
  component: HeaderIcon,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HeaderIcon>;

const Template: ComponentStory<typeof HeaderIcon> = (args) => (
  <HeaderIcon {...args} />
);

export const Default = Template.bind({});
