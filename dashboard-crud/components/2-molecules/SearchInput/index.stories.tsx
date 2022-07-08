import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchInput from ".";

export default {
  title: "Molecules/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = () => <SearchInput />;

export const Default = Template.bind({});
