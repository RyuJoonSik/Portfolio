import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  argTypes: {
    label: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short",
          detail: "something really really long",
        },
      },
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "ButtonPrimary",
};

// Primary.storyName = "I am the primary";
export const Secondary = Template.bind({});
Secondary.args = {
  label: "ButtonSecondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "ButtonLarge",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "ButtonSmall",
};

export const Temp = Template.bind({});
Temp.args = {
  label: "ButtonTemp",
};
