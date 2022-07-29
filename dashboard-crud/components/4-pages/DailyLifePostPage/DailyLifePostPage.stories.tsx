import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostPage from "./DailyLifePostPage";

export default {
  title: "Pages/DailyLifePostPage",
  component: DailyLifePostPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DailyLifePostPage>;

const Template: ComponentStory<typeof DailyLifePostPage> = () => (
  <DailyLifePostPage />
);

export const Default = Template.bind({});
