import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentList from "./UL";

export default {
  title: "Atoms/MainContentList",
  component: MainContentList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentList>;

const Template: ComponentStory<typeof MainContentList> = (props) => (
  <MainContentList {...props} />
);

export const Default = Template.bind({});
