import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FocusInitButton from "./FocusInitButton";

export default {
  title: "Modules/Button/FocusInitButton",
  component: FocusInitButton,
} as ComponentMeta<typeof FocusInitButton>;

const Template: ComponentStory<typeof FocusInitButton> = () => {
  const entryPointRef = useRef<HTMLInputElement>(null);
  const endPointRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <FocusInitButton focusableElRef={endPointRef} />
      <input ref={entryPointRef} />
      <input />
      <input />
      <input ref={endPointRef} />
      <FocusInitButton focusableElRef={entryPointRef} />
    </>
  );
};

export const Default = Template.bind({});
