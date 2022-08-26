import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileIntroduceItem from "./ProfileIntroduceItem";

export default {
  title: "Modules/Item/ProfileIntroduceItem",
  component: ProfileIntroduceItem,
} as ComponentMeta<typeof ProfileIntroduceItem>;

const Template: ComponentStory<typeof ProfileIntroduceItem> = () => (
  <ProfileIntroduceItem />
);

export const Default = Template.bind({});
