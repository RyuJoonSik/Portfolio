import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainDailyLifePost from "./MainDailyLifePost";

export default {
  title: "Organisms/MainDailyLifePost",
  component: MainDailyLifePost,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainDailyLifePost>;

const Template: ComponentStory<typeof MainDailyLifePost> = () => (
  <MainDailyLifePost />
);

export const Default = Template.bind({});
