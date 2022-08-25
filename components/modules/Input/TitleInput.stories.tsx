import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TitleInput from "./TitleInput";

export default {
  title: "Modules/Input/TitleInput",
  component: TitleInput,
} as ComponentMeta<typeof TitleInput>;

const Template: ComponentStory<typeof TitleInput> = (args) => (
  <TitleInput {...args} />
);

export const Default = Template.bind({});
