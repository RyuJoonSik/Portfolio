import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostItem from "./DailyLifePostItem";
import { Timestamp } from "firebase/firestore";
import { DailyLifePost } from "../../../types/dataModel";
import CustomContainer from "../../atoms/Container/CustomContainer";

export default {
  title: "Modules/Item/DailyLifePostItem",
  component: DailyLifePostItem,
} as ComponentMeta<typeof DailyLifePostItem>;

const dailyLifePost: DailyLifePost = {
  id: "id",
  title: "글만 있는 포스트",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  downloadURL: null,
  requestedAt: Timestamp.now(),
};

const dailyLifePostWithImg = {
  ...dailyLifePost,
  title: "글과 이미지가 있는 포스트",
  downloadURL: "https://dummyimage.com/600x400/555/fff",
};

const dailyLifePostWithLongTitle = {
  ...dailyLifePost,
  title: "제목이 긴 포스트 ".repeat(20),
};

const dailyLifePostWithLongContent = {
  ...dailyLifePost,
  title: "내용이 긴 포스트",
  content: dailyLifePost.content.repeat(10),
};

const Template: ComponentStory<typeof DailyLifePostItem> = () => (
  <CustomContainer direction="vertical" gap="medium">
    <DailyLifePostItem dailyLifePost={dailyLifePost} />
    <DailyLifePostItem dailyLifePost={dailyLifePostWithImg} />
    <DailyLifePostItem dailyLifePost={dailyLifePostWithLongTitle} />
    <DailyLifePostItem dailyLifePost={dailyLifePostWithLongContent} />
  </CustomContainer>
);

export const Default = Template.bind({});
