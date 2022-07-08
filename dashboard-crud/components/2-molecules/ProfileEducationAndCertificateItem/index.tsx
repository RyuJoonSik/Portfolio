import React from "react";
import { School } from "@styled-icons/material-sharp/School";

import MainContentItemBox from "../../1-atoms/MainContentItemBox";
import MainContentTitle from "../../1-atoms/MainContentTitle";
import MainContentList from "../../1-atoms/MainContentList";
import MainContentListItem from "../../1-atoms/MainContentListItem";

export default function ProfileEducationAndCertificateItem(): JSX.Element {
  return (
    <MainContentItemBox>
      <MainContentTitle title="Education & Certificate" Icon={School} />
      <MainContentList>
        <MainContentListItem>정보처리 산업기사</MainContentListItem>
        <MainContentListItem>정보보안 산업기사</MainContentListItem>
        <MainContentListItem>IoT 소프트웨어 개발 수료</MainContentListItem>
        <MainContentListItem>
          울산과학대학교 컴퓨터 정보학부 졸업
        </MainContentListItem>
      </MainContentList>
    </MainContentItemBox>
  );
}
