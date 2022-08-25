import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageFileInput from "./ImageFileInput";

export default {
  title: "Modules/Input/ImageFileInput",
  component: ImageFileInput,
} as ComponentMeta<typeof ImageFileInput>;

const Template: ComponentStory<typeof ImageFileInput> = () => (
  <ImageFileInput />
);

export const Default = Template.bind({});
