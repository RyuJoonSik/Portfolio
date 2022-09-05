import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import PageHeaderButton from "./PageHeaderButton";

export default {
  title: "Atoms/Button/PageHeaderButton",
  component: PageHeaderButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PageHeaderButton>;

const Template: ComponentStory<typeof PageHeaderButton> = () => (
  <PageHeaderButton>
    <AccountCircle size={24} />
    프로필
  </PageHeaderButton>
);

export const Default = Template.bind({});
