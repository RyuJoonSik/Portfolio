import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainRegisterForm from "./MainRegisterForm";

export default {
  title: "Organisms/MainRegisterForm",
  component: MainRegisterForm,
} as ComponentMeta<typeof MainRegisterForm>;

const Template: ComponentStory<typeof MainRegisterForm> = () => (
  <MainRegisterForm />
);

export const Default = Template.bind({});
