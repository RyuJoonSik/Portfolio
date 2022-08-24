import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleHeader from "./ArticleHeader";

export default {
  title: "Atoms/Header/ArticleHeader",
  component: ArticleHeader,
} as ComponentMeta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = () => (
  <>
    <ArticleHeader>ArticleHeader</ArticleHeader>
  </>
);

export const Default = Template.bind({});
