import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Main from "./Main";

export default {
  title: "Atoms/Main/Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => (
  <Main>
    <div>테스트 박스 1</div>
    <div>테스트 박스 2</div>
    <div>테스트 박스 3</div>
  </Main>
);

export const Default = Template.bind({});
