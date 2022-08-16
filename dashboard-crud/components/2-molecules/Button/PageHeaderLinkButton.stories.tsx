import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeaderLinkButton from "./PageHeaderLinkButton";

export default {
  title: "Molecules/Button/PageHeaderButton",
  component: PageHeaderLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PageHeaderLinkButton>;

const Template: ComponentStory<typeof PageHeaderLinkButton> = () => (
  <PageHeaderLinkButton to="" />
);

export const Default = Template.bind({});
