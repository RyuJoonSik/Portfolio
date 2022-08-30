import React, { useEffect, useRef, useState } from "react";

import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";

export default function DailyLifePostList(): JSX.Element {
  console.log("list render");
  const lastItemRef = useRef<HTMLElement>(null);
  const [dailyLifePosts, loadDailyLifePosts] = useDailyLifePostReader();

  useEffect(() => {
    loadDailyLifePosts();
    // const handleIntersect = (
    //   entries: IntersectionObserverEntry[],
    //   observer?: IntersectionObserver
    // ) => {
    //   console.log();
    // };
    // const observer = new IntersectionObserver(handleIntersect);
  }, []);

  return (
    <>
      <button onClick={loadDailyLifePosts}>load</button>
      <button>내림차순</button>
      <button>오름차순</button>
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
