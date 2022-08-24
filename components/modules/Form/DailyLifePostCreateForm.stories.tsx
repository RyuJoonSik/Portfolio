import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostCreateForm from "./DailyLifePostCreateForm";

export default {
  title: "Modules/Form/DailyLifePostCreateForm",
  component: DailyLifePostCreateForm,
} as ComponentMeta<typeof DailyLifePostCreateForm>;

const Template: ComponentStory<typeof DailyLifePostCreateForm> = (args) => (
  <DailyLifePostCreateForm {...args} />
);

export const Default = Template.bind({});
