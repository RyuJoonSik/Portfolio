import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import PageHeaderLinkButton from "./PageHeaderLinkButton";

export default {
  title: "Atoms/Button/PageHeaderLinkButton",
  component: PageHeaderLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PageHeaderLinkButton>;

const Template: ComponentStory<typeof PageHeaderLinkButton> = () => (
  <PageHeaderLinkButton to="">
    <AccountCircle size={24} />
    프로필
  </PageHeaderLinkButton>
);

export const Default = Template.bind({});
