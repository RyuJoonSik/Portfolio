import React from "react";
import { Construction } from "@styled-icons/material-sharp/Construction";

import ProfileItem from "./ProfileItem";
import HorizontalList from "../../atoms/List/HorizontalList";

export default function ProfileEducationAndCertificateItem(): JSX.Element {
  return (
    <ProfileItem title="EducationAndCertificate" TitleIcon={Construction}>
      <HorizontalList>
        <li>정보처리 산업기사</li>
        <li>정보보안 산업기사</li>
        <li>IoT 소프트웨어 개발 수료</li>
        <li>울산과학대학교 컴퓨터 정보학부 졸업</li>
      </HorizontalList>
    </ProfileItem>
  );
}
