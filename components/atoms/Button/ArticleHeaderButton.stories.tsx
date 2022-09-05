import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Create } from "@styled-icons/material-outlined/Create";

import ArticleHeaderButton from "./ArticleHeaderButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/ArticleHeaderButton",
  component: ArticleHeaderButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ArticleHeaderButton>;

const Template: ComponentStory<typeof ArticleHeaderButton> = () => (
  <CustomContainer gap="medium">
    <ArticleHeaderButton>ArticleHeaderButton</ArticleHeaderButton>
    <ArticleHeaderButton>
      <Create size={20} />
      ArticleHeaderButtonWithIcon
    </ArticleHeaderButton>
  </CustomContainer>
);

export const Default = Template.bind({});
