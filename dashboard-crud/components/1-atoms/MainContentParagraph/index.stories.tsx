import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentParagraph from ".";

export default {
  title: "Atoms/MainContentParagraph",
  component: MainContentParagraph,
} as ComponentMeta<typeof MainContentParagraph>;

const Template: ComponentStory<typeof MainContentParagraph> = (args) => (
  <MainContentParagraph {...args} />
);

export const DummyText = Template.bind({});
DummyText.args = {
  textContent: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
  repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
  necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
  sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
  repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
  necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
  sit.`,
};
