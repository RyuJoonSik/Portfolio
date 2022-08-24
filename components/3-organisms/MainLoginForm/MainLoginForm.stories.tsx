import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLoginForm from "./MainLoginForm";

export default {
  title: "Organisms/MainLoginForm",
  component: MainLoginForm,
} as ComponentMeta<typeof MainLoginForm>;

const Template: ComponentStory<typeof MainLoginForm> = () => <MainLoginForm />;

export const Default = Template.bind({});
