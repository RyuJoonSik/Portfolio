import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UserLoginStateButton from "./UserLoginStateButton";

export default {
  title: "Molecules/Button/UserLoginStateButton",
  component: UserLoginStateButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof UserLoginStateButton>;

const Template: ComponentStory<typeof UserLoginStateButton> = () => (
  <UserLoginStateButton />
);

export const Default = Template.bind({});
