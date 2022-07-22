import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoginLinkButton from "./LoginLinkButton";

export default {
  title: "Molecules/LoginLinkButton",
  component: LoginLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LoginLinkButton>;

const Template: ComponentStory<typeof LoginLinkButton> = () => (
  <LoginLinkButton />
);

export const Default = Template.bind({});
