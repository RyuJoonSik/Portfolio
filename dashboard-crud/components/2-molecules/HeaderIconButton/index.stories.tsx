import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import HeaderIconButton from ".";

export default {
  title: "Molecules/HeaderIconButton",
  component: HeaderIconButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HeaderIconButton>;

const Template: ComponentStory<typeof HeaderIconButton> = (args) => (
  <HeaderIconButton {...args} />
);

export const DarkMode = Template.bind({});

DarkMode.args = {
  name: "다크 모드",
  Icon: Brightness6,
};

export const Profile = Template.bind({});

Profile.args = {
  name: "프로필",
  Icon: AccountCircle,
};
