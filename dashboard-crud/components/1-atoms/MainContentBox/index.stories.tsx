import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentBox from ".";

export default {
  title: "Atoms/MainContentBox",
  component: MainContentBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentBox>;

const Template: ComponentStory<typeof MainContentBox> = (args) => (
  <MainContentBox {...args} />
);

export const Default = Template.bind({});
