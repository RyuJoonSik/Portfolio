import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderButtonName from ".";

export default {
  title: "Atoms/HeaderButtonName",
  component: HeaderButtonName,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HeaderButtonName>;

const Template: ComponentStory<typeof HeaderButtonName> = (args) => (
  <HeaderButtonName {...args} />
);

export const Default = Template.bind({});
