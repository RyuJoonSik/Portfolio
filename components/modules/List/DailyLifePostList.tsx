import React, { useRef } from "react";

import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";

export default function DailyLifePostList(): JSX.Element {
  const lastItemRef = useRef<HTMLElement>(null);
  const {
    postManager,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
  } = useDailyLifePostReader();
  console.log(postManager);

  const { dailyLifePosts, isLoading } = postManager;
  return (
    <>
      <div>{isLoading ? "로딩 중..." : "로딩 완료"}</div>
      {/* <div>{isMorePostLoading ? "추가 값 로딩 중..." : "추가 로딩 완료"}</div> */}
      <button onClick={loadDayilyLifePosts}>load</button>
      <button onClick={handleOrderByDesc}>desc</button>
      <button onClick={handleOrderByAsc}>asc</button>
      {dailyLifePosts.map((dailyLifePost, index) =>
        index === dailyLifePosts.length - 1 ? (
          <DailyLifePostItem
            key={dailyLifePost.id}
            dailyLifePost={dailyLifePost}
            itemRef={lastItemRef}
          />
        ) : (
          <DailyLifePostItem
            key={dailyLifePost.id}
            dailyLifePost={dailyLifePost}
          />
        )
      )}
    </>
  );
}
