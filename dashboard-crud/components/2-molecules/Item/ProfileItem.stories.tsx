import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import ProfileItem from "./ProfileItem";

export default {
  title: "Molecules/Item/ProfileItem",
  component: ProfileItem,
} as ComponentMeta<typeof ProfileItem>;

const Template: ComponentStory<typeof ProfileItem> = (args) => (
  <ProfileItem {...args} />
);

const ProfileAboutMeContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.
`;

export const AboutMe = Template.bind({});
AboutMe.args = {
  title: "AboutMe",
  titleIcon: Face,
  children: ProfileAboutMeContent,
};

const SkillsContent = (
  <dl>
    <dt>Lorem Ipsum</dt>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dt>Lorem Ipsum</dt>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dt>Lorem Ipsum</dt>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
    <dd>
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </dd>
  </dl>
);

export const Skills = Template.bind({});
Skills.args = {
  title: "Skills",
  titleIcon: Construction,
  children: SkillsContent,
};

const EducationAndCertificateContent = (
  <ul>
    <li>정보처리 산업기사</li>
    <li>정보보안 산업기사</li>
    <li>IoT 소프트웨어 개발 수료</li>
    <li>울산과학대학교 컴퓨터 정보학부 졸업</li>
  </ul>
);

export const EducationAndCertificate = Template.bind({});
EducationAndCertificate.args = {
  title: "EducationAndCertificate",
  titleIcon: School,
  children: EducationAndCertificateContent,
};
