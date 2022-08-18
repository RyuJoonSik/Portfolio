import React from "react";
import styled from "styled-components";
import { MoreHoriz } from "@styled-icons/material-sharp/MoreHoriz";

import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import Article from "../../1-atoms/Article/Article";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import { DailyLifePostDocument } from "../../../types/dataModel";
import ArticleImgContent from "../Img/ArticleImgContent";
import contentDirection from "../../../styles/contentDirection";
import fontSize from "../../../styles/fontSize";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import Icon from "../../1-atoms/Icon/Icon";

const dateOption = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
} as const;

export default function DailyLifePostItem({
  id,
  title,
  content,
  downloadURL,
  requestedAt,
}: DailyLifePostDocument): JSX.Element {
  // async function removeDailyLifePost() {
  //   const db = getFirestore(firebaseApp);

  //   await deleteDoc(doc(db, "dailyLifePosts", id));
  // }
  const ArticleContentsControlBar = styled.div`
    ${contentDirection.horizontal};
    ${contentAlign.center}
    width: 100%;
  `;

  const Time = styled.time`
    flex: 1;
  `;

  const DropDownBox = styled.div``;

  const DropDownButton = styled.button`
    ${contentDirection.vertical};
    ${contentAlign.center};
    /* gap: ${spaceSize.small}; */
    padding: ${spaceSize.small};
    box-shadow: 0px 4px 6px -2px rgb(0 0 0 / 12%),
      0px 2px 2px -1px rgb(0 0 0 / 5%);
    line-height: 1;
    width: 44px;
    height: 44px;
    border-radius: 50%;

    ${fontSize.smallest};
  `;

  // const DropDownList = styled.ul`
  //   li {
  //   }
  // `;

  return (
    <Article.Full>
      <ArticleHeader>
        <h3>{title}</h3>
        <ArticleContentsControlBar>
          <Time>
            {requestedAt.toDate().toLocaleString("ko-KR", dateOption)}
          </Time>
          <DropDownBox>
            <DropDownButton>
              메뉴
              <Icon.Medium as={MoreHoriz} />
            </DropDownButton>
            {/* <DropDownList>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </DropDownList> */}
          </DropDownBox>
        </ArticleContentsControlBar>
        {/* <button type="button" onClick={removeDailyLifePost}> */}
        {/* 삭제 */}
        {/* </button> */}
      </ArticleHeader>
      <ArticleContentContainer>
        {downloadURL ? (
          <ArticleImgContent
            src={downloadURL}
            alt="이미지 파일입니다."
            textContent={content}
          />
        ) : (
          <p>{content}</p>
        )}
      </ArticleContentContainer>
    </Article.Full>
  );
}
