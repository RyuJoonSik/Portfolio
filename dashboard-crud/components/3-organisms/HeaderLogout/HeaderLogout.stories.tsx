import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderLogout from "./HeaderLogout";

export default {
  title: "Organisms/HeaderLogout",
  component: HeaderLogout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderLogout>;

const Template: ComponentStory<typeof HeaderLogout> = () => <HeaderLogout />;

export const Default = Template.bind({});

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   isLogined: true,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   isLogined: false,
// };
