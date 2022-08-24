import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleImgContents from "./ArticleImgContents";

export default {
  title: "Modules/Img/ArticleImgContents",
  component: ArticleImgContents,
} as ComponentMeta<typeof ArticleImgContents>;

const Template: ComponentStory<typeof ArticleImgContents> = (args) => (
  <ArticleImgContents {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://dummyimage.com/600x400/fff/000",
  alt: "alt text",
  textContent: "dummy image",
};
