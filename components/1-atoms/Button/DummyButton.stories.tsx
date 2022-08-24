import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DummyButton from "./DummyButton";
import { HTMLFocusableElement } from "../../../types/htmlElement";

export default {
  title: "Atoms/Button/DummyButton",
  component: DummyButton,
} as ComponentMeta<typeof DummyButton>;

const Template: ComponentStory<typeof DummyButton> = () => {
  const focusableElRef = useRef<HTMLFocusableElement>(null);
  return <DummyButton focusableElRef={focusableElRef} />;
};

export const Default = Template.bind({});
