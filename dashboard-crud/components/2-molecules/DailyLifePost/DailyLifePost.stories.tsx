import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePost from "./DailyLifePost";

export default {
  title: "Molecules/DailyLifePost",
  component: DailyLifePost,
} as ComponentMeta<typeof DailyLifePost>;

const Template: ComponentStory<typeof DailyLifePost> = () => <DailyLifePost />;

export const Default = Template.bind({});
