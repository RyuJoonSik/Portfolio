import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentDescriptionList from ".";

export default {
  title: "Atoms/MainContentDescriptionList",
  component: MainContentDescriptionList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentDescriptionList>;

const Template: ComponentStory<typeof MainContentDescriptionList> = (props) => (
  <MainContentDescriptionList {...props} />
);

export const Default = Template.bind({});
