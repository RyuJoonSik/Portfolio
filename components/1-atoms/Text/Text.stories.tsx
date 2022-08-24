import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Atoms/Text/Text",
  component: Text.Medium,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Text.Medium>;

const Template: ComponentStory<typeof Text.Medium> = () => (
  <>
    <Text.Smallest>Text.Smallest</Text.Smallest>
    <Text.Smaller>Text.Smaller</Text.Smaller>
    <Text.Small>Text.Small</Text.Small>
    <Text.Medium>Text.Medium</Text.Medium>
    <Text.Large>Text.Large</Text.Large>
    <Text.Larger>Text.Larger</Text.Larger>
    <Text.Largest>Text.Largest</Text.Largest>
  </>
);

export const Default = Template.bind({});
