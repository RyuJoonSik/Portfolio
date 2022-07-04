import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileAboutMeItem from ".";

export default {
  title: "Atoms/ProfileAboutMeItem",
  component: ProfileAboutMeItem,
} as ComponentMeta<typeof ProfileAboutMeItem>;

const Template: ComponentStory<typeof ProfileAboutMeItem> = () => (
  <ProfileAboutMeItem />
);

export const Default = Template.bind({});
