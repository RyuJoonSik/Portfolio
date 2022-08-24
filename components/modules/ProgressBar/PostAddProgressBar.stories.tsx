import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostAddProgressBar from "./PostAddProgressBar";

export default {
  title: "Modules/ProgressBar/PostAddProgressBar",
  component: PostAddProgressBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PostAddProgressBar>;

const Template: ComponentStory<typeof PostAddProgressBar> = () => (
  <>
    <PostAddProgressBar value={0} />
    <PostAddProgressBar value={100} />
  </>
);

export const Default = Template.bind({});
