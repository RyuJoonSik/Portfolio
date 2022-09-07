import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckButton from "./CheckButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/CheckButton",
  component: CheckButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CheckButton>;

const Template: ComponentStory<typeof CheckButton> = () => (
  <CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>Examples</div>
      <CheckButton isChecked={true} />
      <CheckButton isChecked={false} />
    </CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>Components</div>
      <CheckButton isChecked={true} buttonName="자동 불러오기" />
      <CheckButton isChecked={false} buttonName="자동 불러오기" />
    </CustomContainer>
  </CustomContainer>
);

export const Default = Template.bind({});
