import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfilePage from "./ProfilePage";

export default {
  title: "Pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Default = Template.bind({});
