import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomProgressBar from "./CustomProgressBar";

export default {
  title: "Atoms/ProgressBar/CustomProgressBar",
  component: CustomProgressBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CustomProgressBar>;

const Template: ComponentStory<typeof CustomProgressBar> = () => (
  <>
    <CustomProgressBar work="이미지 업로드" value={0} />
    <CustomProgressBar work="이미지 업로드" value={50} />
    <CustomProgressBar work="이미지 업로드" value={100} />
    <CustomProgressBar work="포스트 업로드" value={0} />
    <CustomProgressBar work="포스트 업로드" value={100} />
  </>
);

export const Default = Template.bind({});
