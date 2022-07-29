import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EmpityPage from "./EmpityPage";

export default {
  title: "Pages/EmpityPage",
  component: EmpityPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EmpityPage>;

const Template: ComponentStory<typeof EmpityPage> = () => <EmpityPage />;

export const Default = Template.bind({});
