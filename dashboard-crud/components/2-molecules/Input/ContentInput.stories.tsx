import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContentInput from "./ContentInput";

export default {
  title: "Molecules/Input/ContentInput",
  component: ContentInput,
} as ComponentMeta<typeof ContentInput>;

const Template: ComponentStory<typeof ContentInput> = (args) => (
  <ContentInput {...args} />
);

export const Default = Template.bind({});
