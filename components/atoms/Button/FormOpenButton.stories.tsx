import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormOpenButton from "./FormOpenButton";

export default {
  title: "Modules/Button/FormOpenButton",
  component: FormOpenButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof FormOpenButton>;

const Template: ComponentStory<typeof FormOpenButton> = () => (
  <FormOpenButton>FormOpenButton</FormOpenButton>
);

export const Default = Template.bind({});
