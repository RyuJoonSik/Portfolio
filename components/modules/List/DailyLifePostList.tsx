import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";
// import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

export default function DailyLifePostList(): JSX.Element {
  const {
    postManager,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
  } = useDailyLifePostReader();
  const { dailyLifePosts, isLoading, hasMore } = postManager;
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [hasInfiniteScroll, setHasInfiniteScroll] = useState(false);
  // const observer = useRef<IntersectionObserver | null>(null);

  const handleInfiniteScroll = () => {
    setHasInfiniteScroll((prevState) => !prevState);
  };

  useEffect(() => {
    if (!hasInfiniteScroll) {
      return;
    }

    const currentObserver = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const [entryElement] = entries;
        console.log(entryElement.isIntersecting);
        if (entryElement.isIntersecting) {
          loadDayilyLifePosts();
          observer.unobserve(entryElement.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (target) {
      currentObserver.observe(target);
    }
  }, [target, hasInfiniteScroll]);

  return (
    <>
      <button onClick={handleOrderByDesc}>desc</button>
      <button onClick={handleOrderByAsc}>asc</button>
      <button onClick={handleInfiniteScroll}>infinite scroll</button>
      <div>{isLoading && "포스트를 불러오는 중..."}</div>
      {dailyLifePosts.map((dailyLifePost, index) =>
        index === dailyLifePosts.length - 1 ? (
          <DailyLifePostItem
            key={dailyLifePost.id}
            dailyLifePost={dailyLifePost}
            setLastItem={setTarget}
          />
        ) : (
          <DailyLifePostItem
            key={dailyLifePost.id}
            dailyLifePost={dailyLifePost}
          />
        )
      )}
      {hasMore && !hasInfiniteScroll && (
        <button onClick={loadDayilyLifePosts}>load</button>
      )}
      <div>{!hasMore && "더 이상 포스트가 없습니다."}</div>
    </>
  );
}
