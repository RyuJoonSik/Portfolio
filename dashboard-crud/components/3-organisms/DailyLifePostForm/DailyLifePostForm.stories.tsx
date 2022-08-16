import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostForm from "./DailyLifePostForm";

export default {
  title: "Organisms/DailyLifePostForm",
  component: DailyLifePostForm,
} as ComponentMeta<typeof DailyLifePostForm>;

const Template: ComponentStory<typeof DailyLifePostForm> = () => (
  <DailyLifePostForm handleHide={() => console.log("hi")} />
);

export const Default = Template.bind({});
