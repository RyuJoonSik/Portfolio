import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RegisterForm from "./RegisterForm ";

export default {
  title: "Molecules/RegisterForm ",
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const Default = Template.bind({});
