import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PreventDefaultForm from "./PreventDefaultForm";

export default {
  title: "Atoms/Form/PreventDefaultForm ",
  component: PreventDefaultForm,
} as ComponentMeta<typeof PreventDefaultForm>;

const Template: ComponentStory<typeof PreventDefaultForm> = () => (
  <PreventDefaultForm>
    <input />
  </PreventDefaultForm>
);

export const Default = Template.bind({});
