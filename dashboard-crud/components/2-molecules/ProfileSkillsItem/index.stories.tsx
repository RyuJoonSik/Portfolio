import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileSkillsItem from ".";

export default {
  title: "Molecules/ProfileSkillsItem",
  component: ProfileSkillsItem,
} as ComponentMeta<typeof ProfileSkillsItem>;

const Template: ComponentStory<typeof ProfileSkillsItem> = () => (
  <ProfileSkillsItem />
);

export const Default = Template.bind({});
