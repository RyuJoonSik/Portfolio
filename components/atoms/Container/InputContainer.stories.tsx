import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputContainer from "./InputContainer";

export default {
  title: "Atoms/Container/InputContainer",
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = () => (
  <>
    <InputContainer>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" placeholder="이메일" />
    </InputContainer>
    <InputContainer>
      <label htmlFor="password">비밀번호</label>
      <input type="password" placeholder="비밀번호" />
    </InputContainer>
  </>
);

export const Default = Template.bind({});
