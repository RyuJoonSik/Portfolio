import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileSkillsItem from "./ProfileSkillsItem";

export default {
  title: "Modules/Item/ProfileSkillsItem",
  component: ProfileSkillsItem,
} as ComponentMeta<typeof ProfileSkillsItem>;

const Template: ComponentStory<typeof ProfileSkillsItem> = () => (
  <ProfileSkillsItem />
);

export const Default = Template.bind({});
