import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostUpdateForm from "./DailyLifePostUpdateForm";
import CustomProgressBar from "../../atoms/ProgressBar/CustomProgressBar";
import { DailyLifePost } from "../../../types/dataModel";

export default {
  title: "Modules/Form/DailyLifePostUpdateForm",
  component: DailyLifePostUpdateForm,
} as ComponentMeta<typeof DailyLifePostUpdateForm>;

const dailyLifePost = {
  title: "제목",
  content: "내용",
} as DailyLifePost;

const Template: ComponentStory<typeof DailyLifePostUpdateForm> = (args) => (
  <DailyLifePostUpdateForm {...args} prevDailyLifePost={dailyLifePost} />
);

export const Default = Template.bind({});

export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  children: (
    <>
      <CustomProgressBar work="사진 업데이트" value={100} />
      <CustomProgressBar work="포스트 업데이트" value={100} />
    </>
  ),
};
