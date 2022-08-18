import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeaderLinkButton from "./PageHeaderLinkButton";

export default {
  title: "Atoms/Button/PageHeaderButton",
  component: PageHeaderLinkButton,
} as ComponentMeta<typeof PageHeaderLinkButton>;

const Template: ComponentStory<typeof PageHeaderLinkButton> = () => (
  <PageHeaderLinkButton to="">PageHeaderLinkButton</PageHeaderLinkButton>
);

export const Default = Template.bind({});
