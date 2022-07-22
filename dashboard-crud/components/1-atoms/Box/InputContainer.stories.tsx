import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputContainer from "./InputContainer";

export default {
  title: "Atoms/InputContainer",
  component: InputContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = () => (
  <InputContainer />
);

export const Default = Template.bind({});
