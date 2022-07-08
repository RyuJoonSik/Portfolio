import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderBox from ".";

export default {
  title: "Atoms/HeaderBox",
  component: HeaderBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderBox>;

const Template: ComponentStory<typeof HeaderBox> = (args) => (
  <HeaderBox {...args} />
);

export const Default = Template.bind({});
