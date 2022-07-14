import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentForm from ".";

export default {
  title: "Molecules/MainContentForm",
  component: MainContentForm,
} as ComponentMeta<typeof MainContentForm>;

const Template: ComponentStory<typeof MainContentForm> = () => (
  <MainContentForm />
);

export const Default = Template.bind({});
