import React from "react";

import { DailyLifePost } from "../../../types/dataModel";
import Article from "../../atoms/Article/Article";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import ArticleImgContents from "../Img/ArticleImgContents";

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
}: DailyLifePost): JSX.Element {
  // async function removeDailyLifePost() {
  //   const db = getFirestore(firebaseApp);

  //   await deleteDoc(doc(db, "dailyLifePosts", id));
  // }

  return (
    <Article>
      <ArticleHeader>
        <h3>{title}</h3>
        <time>{requestedAt.toDate().toLocaleString("ko-KR", dateOption)}</time>
        {/* <button type="button" onClick={removeDailyLifePost}> */}
        {/* 삭제 */}
        {/* </button> */}
      </ArticleHeader>
      <ArticleContentsContainer>
        {downloadURL ? (
          <ArticleImgContents
            src={downloadURL}
            alt="이미지 파일입니다."
            textContent={content}
          />
        ) : (
          <p>{content}</p>
        )}
      </ArticleContentsContainer>
    </Article>
  );
}
