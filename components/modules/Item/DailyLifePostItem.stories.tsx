import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostItem from "./DailyLifePostItem";
import { Timestamp } from "firebase/firestore";

export default {
  title: "Modules/Item/DailyLifePostItem",
  component: DailyLifePostItem,
} as ComponentMeta<typeof DailyLifePostItem>;

const Template: ComponentStory<typeof DailyLifePostItem> = (args) => (
  <DailyLifePostItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  requestedAt: Timestamp.now(),
  title: "What is Lorem Ipsum?",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

export const WithImage = Template.bind({});
WithImage.args = {
  requestedAt: Timestamp.now(),
  downloadURL: "https://dummyimage.com/600x400/fff/000",
  title: "What is Lorem Ipsum?",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
