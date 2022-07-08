import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentListItem from ".";

export default {
  title: "Atoms/MainContentListItem",
  component: MainContentListItem,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentListItem>;

const Template: ComponentStory<typeof MainContentListItem> = (props) => (
  <MainContentListItem {...props} />
);

export const Default = Template.bind({});
