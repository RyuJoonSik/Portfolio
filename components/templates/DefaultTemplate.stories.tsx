import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DefaultTemplate from "./DefaultTemplate";
import ProfileContents from "../modules/MainContents/ProfileContents";
import LoginContents from "../modules/MainContents/LoginContents";
import LogoutContents from "../modules/MainContents/LogoutContents";
import DailyLifeContents from "../modules/MainContents/DailyLifeContents";

export default {
  title: "Templates/DefaultTemplate",
  component: DefaultTemplate,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DefaultTemplate>;

const Template: ComponentStory<typeof DefaultTemplate> = (args) => (
  <DefaultTemplate {...args} />
);

export const Empty = Template.bind({});

export const Profile = Template.bind({});
Profile.args = {
  children: <ProfileContents />,
};

export const Login = Template.bind({});
Login.args = {
  children: <LoginContents />,
};

export const Logout = Template.bind({});
Logout.args = {
  children: <LogoutContents />,
};

export const DailyLife = Template.bind({});
DailyLife.args = {
  children: <DailyLifeContents />,
};
