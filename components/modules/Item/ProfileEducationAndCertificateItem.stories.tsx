import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileEducationAndCertificateItem from "./ProfileEducationAndCertificateItem";

export default {
  title: "Modules/Item/ProfileEducationAndCertificateItem",
  component: ProfileEducationAndCertificateItem,
} as ComponentMeta<typeof ProfileEducationAndCertificateItem>;

const Template: ComponentStory<
  typeof ProfileEducationAndCertificateItem
> = () => <ProfileEducationAndCertificateItem />;

export const Default = Template.bind({});
