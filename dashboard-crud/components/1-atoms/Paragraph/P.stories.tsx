import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import P from "./P";

export default {
  title: "Atoms/P",
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = () => (
  <P>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
    necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
    sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
    necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt sit.
  </P>
);

export const Default = Template.bind({});
