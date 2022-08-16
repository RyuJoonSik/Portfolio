import React from "react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import Main from "../../1-atoms/Main/Main";
import SectionHeader from "../../1-atoms/Header/SectionHeader";
import ProfileItem from "../../2-molecules/Item/ProfileItem";

const ProfileAboutMeContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.
`;

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

const EducationAndCertificateContent = (
  <ul>
    <li>정보처리 산업기사</li>
    <li>정보보안 산업기사</li>
    <li>IoT 소프트웨어 개발 수료</li>
    <li>울산과학대학교 컴퓨터 정보학부 졸업</li>
  </ul>
);

export default function MainProfileContents(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>프로필</h2>
      </SectionHeader>
      <ProfileItem title="AboutMe" titleIcon={Face}>
        {ProfileAboutMeContent}
      </ProfileItem>
      <ProfileItem title="Skills" titleIcon={Construction}>
        {SkillsContent}
      </ProfileItem>
      <ProfileItem title="EducationAndCertificate" titleIcon={School}>
        {EducationAndCertificateContent}
      </ProfileItem>
    </Main>
  );
}
