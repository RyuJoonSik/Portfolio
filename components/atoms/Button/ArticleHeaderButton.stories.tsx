import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Create } from "@styled-icons/material-outlined/Create";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { BorderColor } from "@styled-icons/material-outlined/BorderColor";

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
    <CustomContainer direction="vertical" gap="medium">
      <div>Examples</div>
      <ArticleHeaderButton buttonName="default" />
      <ArticleHeaderButton Icon={Create} buttonName="default with icon" />
      <ArticleHeaderButton color="red" buttonName="red color" />
      <ArticleHeaderButton Icon={Create} color="red" buttonName="red color" />
      <ArticleHeaderButton color="green" buttonName="green color" />
      <ArticleHeaderButton
        Icon={Create}
        color="green"
        buttonName="green color"
      />
      <ArticleHeaderButton color="blue" buttonName="blue color" />
      <ArticleHeaderButton Icon={Create} color="blue" buttonName="blue color" />
      <ArticleHeaderButton color="white" buttonName="white color" />
      <ArticleHeaderButton
        Icon={Create}
        color="white"
        buttonName="white color"
      />
    </CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>Components</div>
      <ArticleHeaderButton color="white" buttonName="닫기" />
      <ArticleHeaderButton Icon={Delete} buttonName="삭제" color="red" />
      <ArticleHeaderButton Icon={BorderColor} buttonName="수정" color="green" />
    </CustomContainer>
  </CustomContainer>
);

export const Default = Template.bind({});
