import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "./Progress";

export default {
  title: "Atoms/Progress/Progress",
  component: Progress,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = () => (
  <>
    <Progress behavior="이미지 업로드" max={100} value={50} />
    <Progress behavior="이미지 업로드" max={100} value={100} />
  </>
);

export const Default = Template.bind({});
