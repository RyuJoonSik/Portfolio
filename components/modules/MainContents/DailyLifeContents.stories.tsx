import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifeContents from "./DailyLifeContents";

export default {
  title: "Modules/MainContents/DailyLifeContents",
  component: DailyLifeContents,
} as ComponentMeta<typeof DailyLifeContents>;

const Template: ComponentStory<typeof DailyLifeContents> = () => (
  <DailyLifeContents />
);

export const Default = Template.bind({});
