import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomInput from "./CustomInput";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Input/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = () => (
  <CustomContainer>
    <CustomContainer direction="vertical">
      <div>No Label</div>
      <CustomInput
        placeholder="id@email.com 형식으로 입력해 주세요."
        type="email"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        placeholder="비밀번호 6자리를 입력해 주세요."
        type="password"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        placeholder="제목을 입력해 주세요."
        id="title"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        placeholder="내용을 입력해 주세요."
        type="textarea"
        handleChange={() => {
          return;
        }}
      />
    </CustomContainer>
    <CustomContainer direction="vertical">
      <div>With Label</div>
      <CustomInput
        label="이메일"
        placeholder="id@email.com 형식으로 입력해 주세요."
        type="email"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        label="비밀번호"
        placeholder="비밀번호 6자리를 입력해 주세요."
        type="password"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        placeholder="제목을 입력해 주세요."
        label="제목"
        id="title"
        handleChange={() => {
          return;
        }}
      />
      <CustomInput
        placeholder="내용을 입력해 주세요."
        label="내용"
        type="textarea"
        handleChange={() => {
          return;
        }}
      />
    </CustomContainer>
  </CustomContainer>
);

export const Default = Template.bind({});
