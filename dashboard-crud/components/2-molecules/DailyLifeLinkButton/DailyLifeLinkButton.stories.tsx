import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifeLinkButton from "./DailyLifeLinkButton";

export default {
  title: "Molecules/DailyLifeLinkButton",
  component: DailyLifeLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DailyLifeLinkButton>;

const Template: ComponentStory<typeof DailyLifeLinkButton> = () => (
  <DailyLifeLinkButton />
);

export const Default = Template.bind({});
