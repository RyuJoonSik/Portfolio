import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileSkills from "./ProfileSkills";

export default {
  title: "Molecules/ProfileSkills",
  component: ProfileSkills,
} as ComponentMeta<typeof ProfileSkills>;

const Template: ComponentStory<typeof ProfileSkills> = () => <ProfileSkills />;

export const Default = Template.bind({});
