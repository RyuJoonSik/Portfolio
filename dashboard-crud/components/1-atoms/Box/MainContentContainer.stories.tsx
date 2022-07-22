import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentContainer from "./MainContentContainer";

export default {
  title: "Atoms/MainContentContainer",
  component: MainContentContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentContainer>;

const Template: ComponentStory<typeof MainContentContainer> = () => (
  <MainContentContainer />
);

export const Default = Template.bind({});
