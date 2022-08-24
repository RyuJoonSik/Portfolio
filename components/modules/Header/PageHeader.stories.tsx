import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeader from "./PageHeader";

export default {
  title: "Modules/Header/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = () => <PageHeader />;

export const Default = Template.bind({});
