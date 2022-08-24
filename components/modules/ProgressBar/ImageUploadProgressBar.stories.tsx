import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageUploadProgressBar from "./ImageUploadProgressBar";

export default {
  title: "Modules/ProgressBar/ImageUploadProgressBar",
  component: ImageUploadProgressBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ImageUploadProgressBar>;

const Template: ComponentStory<typeof ImageUploadProgressBar> = () => (
  <>
    <ImageUploadProgressBar value={0} />
    <ImageUploadProgressBar value={50} />
    <ImageUploadProgressBar value={100} />
  </>
);

export const Default = Template.bind({});
