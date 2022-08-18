import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormSubmitButton from "./FormSubmitButton";

export default {
  title: "Atoms/Button/FormSubmitButton",
  component: FormSubmitButton,
} as ComponentMeta<typeof FormSubmitButton>;

const Template: ComponentStory<typeof FormSubmitButton> = () => (
  <FormSubmitButton>FormSubmitButton</FormSubmitButton>
);

export const Default = Template.bind({});
