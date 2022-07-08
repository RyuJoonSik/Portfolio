import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentDescriptionDetail from ".";

export default {
  title: "Atoms/MainContentDescriptionDetail",
  component: MainContentDescriptionDetail,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentDescriptionDetail>;

const Template: ComponentStory<typeof MainContentDescriptionDetail> = (
  props
) => <MainContentDescriptionDetail {...props} />;

export const Default = Template.bind({});
