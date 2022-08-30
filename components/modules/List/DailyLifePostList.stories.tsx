import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostList from "./DailyLifePostList";

export default {
  title: "Modules/List/DailyLifePostList",
  component: DailyLifePostList,
} as ComponentMeta<typeof DailyLifePostList>;

const Template: ComponentStory<typeof DailyLifePostList> = (args) => (
  <DailyLifePostList {...args} />
);

export const Default = Template.bind({});
