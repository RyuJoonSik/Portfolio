import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentContainer from ".";

export default {
  title: "Atoms/MainContentContainer",
  component: MainContentContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentContainer>;

const Template: ComponentStory<typeof MainContentContainer> = (args) => (
  <MainContentContainer {...args} />
);

export const Default = Template.bind({});
