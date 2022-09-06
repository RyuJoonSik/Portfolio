import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Create } from "@styled-icons/material-outlined/Create";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { BorderColor } from "@styled-icons/material-outlined/BorderColor";

import DefaultButton from "./DefaultButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/DefaultButton",
  component: DefaultButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = () => (
  <CustomContainer gap="medium">
    <CustomContainer direction="vertical" gap="medium">
      <div>Examples</div>
      <DefaultButton buttonName="default" />
      <DefaultButton Icon={Create} buttonName="default with icon" />
      <DefaultButton color="red" buttonName="red color" />
      <DefaultButton Icon={Create} color="red" buttonName="red color" />
      <DefaultButton color="green" buttonName="green color" />
      <DefaultButton Icon={Create} color="green" buttonName="green color" />
      <DefaultButton color="blue" buttonName="blue color" />
      <DefaultButton Icon={Create} color="blue" buttonName="blue color" />
      <DefaultButton color="white" buttonName="white color" />
      <DefaultButton Icon={Create} color="white" buttonName="white color" />
    </CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>Components</div>
      <DefaultButton color="white" buttonName="닫기" />
      <DefaultButton Icon={Delete} buttonName="삭제" color="red" />
      <DefaultButton Icon={BorderColor} buttonName="수정" color="green" />
    </CustomContainer>
  </CustomContainer>
);

export const Default = Template.bind({});
