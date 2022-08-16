import React from "react";

import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import Article from "../../1-atoms/Article/Article";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import { DailyLifePostDocument } from "../../../types/dataModel";
import ArticleImgContent from "../Img/ArticleImgContent";

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

  return (
    <Article.Full>
      <ArticleHeader>
        <h3>{title}</h3>
        <time>{requestedAt.toDate().toLocaleString("ko-KR", dateOption)}</time>
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
