import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PreventedSubmitForm from "./PreventedSubmitForm";

export default {
  title: "Atoms/Form/PreventedSubmitForm ",
  component: PreventedSubmitForm,
} as ComponentMeta<typeof PreventedSubmitForm>;

const Template: ComponentStory<typeof PreventedSubmitForm> = () => (
  <PreventedSubmitForm>
    <input />
  </PreventedSubmitForm>
);

export const Default = Template.bind({});
