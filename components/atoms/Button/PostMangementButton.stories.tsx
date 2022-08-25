import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostMangementButton from "./PostMangementButton";

export default {
  title: "Atoms/Button/PostMangementButton",
  component: PostMangementButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PostMangementButton>;

const Template: ComponentStory<typeof PostMangementButton> = () => (
  <PostMangementButton>PostMangementButton</PostMangementButton>
);

export const Default = Template.bind({});
