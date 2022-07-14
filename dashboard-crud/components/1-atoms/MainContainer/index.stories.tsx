import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContainer from ".";

export default {
  title: "Atoms/MainContainer",
  component: MainContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContainer>;

const Template: ComponentStory<typeof MainContainer> = (args) => (
  <MainContainer {...args} />
);

export const Default = Template.bind({});
