import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RequestButton from "./RequestButton";

export default {
  title: "Atoms/Button/RequestButton",
  component: RequestButton,
} as ComponentMeta<typeof RequestButton>;

const Template: ComponentStory<typeof RequestButton> = () => (
  <RequestButton>RequestButton</RequestButton>
);

export const Default = Template.bind({});
