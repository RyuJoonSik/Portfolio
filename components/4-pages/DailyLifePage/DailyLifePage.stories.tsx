import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePage from "./DailyLifePage";

export default {
  title: "Pages/DailyLifePage",
  component: DailyLifePage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DailyLifePage>;

const Template: ComponentStory<typeof DailyLifePage> = () => <DailyLifePage />;

export const Default = Template.bind({});
