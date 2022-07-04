import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DefaultPage from ".";

export default {
  title: "Pages/DefaultPage",
  component: DefaultPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DefaultPage>;

const Template: ComponentStory<typeof DefaultPage> = () => <DefaultPage />;

export const Default = Template.bind({});
