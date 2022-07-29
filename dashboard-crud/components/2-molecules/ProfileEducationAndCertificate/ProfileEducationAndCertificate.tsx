import React from "react";
import { School } from "@styled-icons/material-sharp/School";

import MainFullContentItemContainer from "../../1-atoms/Box/MainFullContentItemContainer";
import H3 from "../../1-atoms/Heading/H3";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";
import UL from "../../1-atoms/UnorderedList/UL";
import LI from "../../1-atoms/ListItem/LI";
import MainContentItemHeader from "../../1-atoms/Header/MainContentItemHeader";

export default function ProfileEducationAndCertificate(): JSX.Element {
  return (
    <MainFullContentItemContainer>
      <MainContentItemHeader>
        <MediumIcon as={School} />
        <H3>Education & Certificate</H3>
      </MainContentItemHeader>
      <UL>
        <LI>정보처리 산업기사</LI>
        <LI>정보보안 산업기사</LI>
        <LI>IoT 소프트웨어 개발 수료</LI>
        <LI>울산과학대학교 컴퓨터 정보학부 졸업</LI>
      </UL>
    </MainFullContentItemContainer>
  );
}
