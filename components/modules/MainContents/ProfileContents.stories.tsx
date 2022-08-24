import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileContents from "./ProfileContents";

export default {
  title: "Modules/MainContents/ProfileContents",
  component: ProfileContents,
} as ComponentMeta<typeof ProfileContents>;

const Template: ComponentStory<typeof ProfileContents> = () => (
  <ProfileContents />
);

export const Default = Template.bind({});
