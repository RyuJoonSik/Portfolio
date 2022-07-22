import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileEducationAndCertificate from "./ProfileEducationAndCertificate";

export default {
  title: "Molecules/ProfileEducationAndCertificate",
  component: ProfileEducationAndCertificate,
} as ComponentMeta<typeof ProfileEducationAndCertificate>;

const Template: ComponentStory<typeof ProfileEducationAndCertificate> = () => (
  <ProfileEducationAndCertificate />
);

export const Default = Template.bind({});
