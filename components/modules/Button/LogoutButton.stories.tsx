import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoutButton from "./LogoutButton";

export default {
  title: "Modules/Button/LogoutButton",
  component: LogoutButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = () => <LogoutButton />;

export const Default = Template.bind({});
