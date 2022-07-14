import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainTitle from ".";

export default {
  title: "Atoms/MainTitle",
  component: MainTitle,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainTitle>;

const Template: ComponentStory<typeof MainTitle> = (args) => (
  <MainTitle {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  title: "프로필",
};

export const Login = Template.bind({});
Login.args = {
  title: "로그인",
};
