import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileLinkButton from "./ProfileLinkButton";

export default {
  title: "Molecules/ProfileLinkButton",
  component: ProfileLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ProfileLinkButton>;

const Template: ComponentStory<typeof ProfileLinkButton> = () => (
  <ProfileLinkButton />
);

export const Default = Template.bind({});
