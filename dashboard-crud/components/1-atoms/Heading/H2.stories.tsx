import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H2 from "./H2";

export default {
  title: "Atoms/H2",
  component: H2,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = () => (
  <>
    <H2>프로필</H2>
    <H2>일상</H2>
    <H2>로그인</H2>
    <H2>로그아웃</H2>
  </>
);

export const Default = Template.bind({});
