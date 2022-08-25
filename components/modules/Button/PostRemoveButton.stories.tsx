import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostRemoveButton from "./PostRemoveButton";

export default {
  title: "Modules/Button/PostRemoveButton",
  component: PostRemoveButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PostRemoveButton>;

const Template: ComponentStory<typeof PostRemoveButton> = (args) => (
  <PostRemoveButton {...args} />
);

export const Default = Template.bind({});
