import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import UserAuthLinkButton from "./UserAuthLinkButton";

export default {
  title: "Modules/Button/UserAuthLinkButton",
  component: UserAuthLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof UserAuthLinkButton>;

const Template: ComponentStory<typeof UserAuthLinkButton> = () => (
  <UserAuthLinkButton />
);

export const Default = Template.bind({});
