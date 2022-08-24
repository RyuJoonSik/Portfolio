import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileAboutMeItem from "./ProfileAboutMeItem";

export default {
  title: "Modules/Item/ProfileAboutMeItem",
  component: ProfileAboutMeItem,
} as ComponentMeta<typeof ProfileAboutMeItem>;

const Template: ComponentStory<typeof ProfileAboutMeItem> = () => (
  <ProfileAboutMeItem />
);

export const Default = Template.bind({});
