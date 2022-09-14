import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostCreateForm from "./DailyLifePostCreateForm";
import CustomProgressBar from "../../atoms/ProgressBar/CustomProgressBar";

export default {
  title: "Modules/Form/DailyLifePostCreateForm",
  component: DailyLifePostCreateForm,
} as ComponentMeta<typeof DailyLifePostCreateForm>;

const Template: ComponentStory<typeof DailyLifePostCreateForm> = (args) => (
  <DailyLifePostCreateForm {...args} />
);

export const Default = Template.bind({});

export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  children: (
    <>
      <CustomProgressBar work="사진 업로드" value={100} />
      <CustomProgressBar work="포스트 게시" value={100} />
    </>
  ),
};
