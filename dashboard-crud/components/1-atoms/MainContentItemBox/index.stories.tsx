import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentItemBox from ".";

export default {
  title: "Atoms/MainContentItemBox",
  component: MainContentItemBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentItemBox>;

const Template: ComponentStory<typeof MainContentItemBox> = (args) => (
  <MainContentItemBox {...args} />
);

export const Default = Template.bind({});
