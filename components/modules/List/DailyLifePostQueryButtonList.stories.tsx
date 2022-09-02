import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostQueryButtonList from "./DailyLifePostQueryButtonList";

export default {
  title: "Modules/List/DailyLifePostQueryButtonList",
  component: DailyLifePostQueryButtonList,
} as ComponentMeta<typeof DailyLifePostQueryButtonList>;

const Template: ComponentStory<typeof DailyLifePostQueryButtonList> = (
  args
) => <DailyLifePostQueryButtonList {...args} />;

export const Default = Template.bind({});
