import React, { useRef } from "react";

import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";

export default function DailyLifePostList(): JSX.Element {
  const lastItemRef = useRef<HTMLElement>(null);
  const {
    dailyLifePosts,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
    isInitialLoading,
    isMorePostLoading,
  } = useDailyLifePostReader();
  // console.log("isLoading: ", isLoading);
  return (
    <>
      <div>{isInitialLoading ? "초기 값 로딩 중..." : "초기화 완료"}</div>
      <div>{isMorePostLoading ? "추가 값 로딩 중..." : "추가 로딩 완료"}</div>
      <button onClick={loadDayilyLifePosts}>load</button>
      <button onClick={handleOrderByDesc}>내림차순</button>
      <button onClick={handleOrderByAsc}>오름차순</button>
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
