import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import MainContentTitle from ".";

export default {
  title: "Atoms/MainContentTitle",
  component: MainContentTitle,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentTitle>;

const Template: ComponentStory<typeof MainContentTitle> = (args) => (
  <MainContentTitle {...args} />
);

export const AboutMe = Template.bind({});
AboutMe.args = {
  title: "About me",
  Icon: Face,
};

export const Skills = Template.bind({});
Skills.args = {
  title: "Skills",
  Icon: Construction,
};

export const EducationAndCertificate = Template.bind({});
EducationAndCertificate.args = {
  title: "Education & Certificate",
  Icon: School,
};
