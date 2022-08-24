import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostItem from "./DailyLifePostItem";

export default {
  title: "Molecules/Item/DailyLifePostItem",
  component: DailyLifePostItem,
} as ComponentMeta<typeof DailyLifePostItem>;

const Template: ComponentStory<typeof DailyLifePostItem> = (args) => (
  <DailyLifePostItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  time: "2022-07-25 오후 6:06",
  title: "테스트 제목",
  textContent: "테스트 내용",
};
