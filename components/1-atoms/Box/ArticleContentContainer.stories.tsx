import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleContentContainer from "./ArticleContentContainer";

export default {
  title: "Atoms/Box/ArticleContentContainer ",
  component: ArticleContentContainer,
} as ComponentMeta<typeof ArticleContentContainer>;

const Template: ComponentStory<typeof ArticleContentContainer> = () => (
  <ArticleContentContainer>
    <div>테스트 박스 1</div>
  </ArticleContentContainer>
);

export const Default = Template.bind({});
