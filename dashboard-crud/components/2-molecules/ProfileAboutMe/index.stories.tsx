import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileAboutMe from ".";

export default {
  title: "Molecules/ProfileAboutMe",
  component: ProfileAboutMe,
} as ComponentMeta<typeof ProfileAboutMe>;

const Template: ComponentStory<typeof ProfileAboutMe> = () => (
  <ProfileAboutMe />
);

export const Default = Template.bind({});
