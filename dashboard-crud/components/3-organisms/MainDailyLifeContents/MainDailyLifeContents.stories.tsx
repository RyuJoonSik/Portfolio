import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainDailyLifeContents from "./MainDailyLifeContents";

export default {
  title: "Organisms/MainDailyLifeContents",
  component: MainDailyLifeContents,
} as ComponentMeta<typeof MainDailyLifeContents>;

const Template: ComponentStory<typeof MainDailyLifeContents> = () => (
  <MainDailyLifeContents />
);

export const Default = Template.bind({});
