import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentItemContainer from ".";

export default {
  title: "Atoms/MainContentItemContainer",
  component: MainContentItemContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentItemContainer>;

const Template: ComponentStory<typeof MainContentItemContainer> = (args) => (
  <MainContentItemContainer {...args} />
);

export const Default = Template.bind({});
