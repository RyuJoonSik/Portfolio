import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalContentsContainer from "./ModalContentsContainer";

export default {
  title: "Atoms/Container/ModalContentsContainer ",
  component: ModalContentsContainer,
} as ComponentMeta<typeof ModalContentsContainer>;

const Template: ComponentStory<typeof ModalContentsContainer> = () => (
  <ModalContentsContainer>ModalContentsContainer</ModalContentsContainer>
);

export const Default = Template.bind({});
