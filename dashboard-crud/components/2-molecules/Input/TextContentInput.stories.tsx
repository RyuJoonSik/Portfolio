import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextContentInput from "./TextContentInput";

export default {
  title: "Molecules/Input/TextContentInput",
  component: TextContentInput,
} as ComponentMeta<typeof TextContentInput>;

const Template: ComponentStory<typeof TextContentInput> = (args) => (
  <TextContentInput {...args} />
);

export const Default = Template.bind({});
