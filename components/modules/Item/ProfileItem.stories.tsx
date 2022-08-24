import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Construction } from "@styled-icons/material-sharp/Construction";

import ProfileItem from "./ProfileItem";

export default {
  title: "Modules/Item/ProfileItem",
  component: ProfileItem,
} as ComponentMeta<typeof ProfileItem>;

const Template: ComponentStory<typeof ProfileItem> = (args) => (
  <ProfileItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  TitleIcon: Construction,
  children: "contents",
};
