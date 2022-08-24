import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleContentsContainer from "./ArticleContentsContainer";

export default {
  title: "Atoms/Container/ArticleContentsContainer ",
  component: ArticleContentsContainer,
} as ComponentMeta<typeof ArticleContentsContainer>;

const Template: ComponentStory<typeof ArticleContentsContainer> = () => (
  <ArticleContentsContainer>ArticleContentsContainer</ArticleContentsContainer>
);

export const Default = Template.bind({});
