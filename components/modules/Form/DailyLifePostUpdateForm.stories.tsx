import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DailyLifePostUpdateForm from "./DailyLifePostUpdateForm";

export default {
  title: "Modules/Form/DailyLifePostUpdateForm",
  component: DailyLifePostUpdateForm,
} as ComponentMeta<typeof DailyLifePostUpdateForm>;

const Template: ComponentStory<typeof DailyLifePostUpdateForm> = (args) => (
  <DailyLifePostUpdateForm {...args} />
);

export const Default = Template.bind({});
