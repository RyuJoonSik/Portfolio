import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormLinkButton from "./FormLinkButton";

export default {
  title: "Atoms/Button/FormLinkButton",
  component: FormLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof FormLinkButton>;

const Template: ComponentStory<typeof FormLinkButton> = () => (
  <FormLinkButton to="">회원가입</FormLinkButton>
);

export const Default = Template.bind({});
