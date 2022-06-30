import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileButton from ".";

export default {
  title: "Atoms/ProfileButton",
  component: ProfileButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ProfileButton>;

const Template: ComponentStory<typeof ProfileButton> = () => <ProfileButton />;

export const Default = Template.bind({});
