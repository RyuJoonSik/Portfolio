import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderTitle from ".";

export default {
  title: "Atoms/HeaderTitle",
  component: HeaderTitle,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof HeaderTitle>;

const Template: ComponentStory<typeof HeaderTitle> = () => <HeaderTitle />;

export const Default = Template.bind({});
