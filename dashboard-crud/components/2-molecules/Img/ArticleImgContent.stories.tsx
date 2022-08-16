import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleImgContent from "./ArticleImgContent";

export default {
  title: "Molecules/Img/ArticleImgContent",
  component: ArticleImgContent,
} as ComponentMeta<typeof ArticleImgContent>;

const Template: ComponentStory<typeof ArticleImgContent> = (args) => (
  <ArticleImgContent {...args} />
);

export const Default = Template.bind({});
