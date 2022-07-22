import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DL from "./DL";

export default {
  title: "Atoms/DL",
  component: DL,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DL>;

const Template: ComponentStory<typeof DL> = () => (
  <DL>
    <dt>테스트 용어</dt>
    <dd>테스트 설명1</dd>
    <dd>테스트 설명2</dd>
    <dd>테스트 설명3</dd>
  </DL>
);

export const Default = Template.bind({});
