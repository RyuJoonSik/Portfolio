import React from "react";

import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import CustomContainer from "../../atoms/Container/CustomContainer";
import RequestButton from "../../atoms/Button/RequestButton";
import InfiniteScrollToggleButton from "../Button/InfiniteScrollToggleButton";
import DailyLifePostQueryButtonList from "./DailyLifePostQueryButtonList";

export default function DailyLifePostList(): JSX.Element {
  const {
    postManager,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
  } = useDailyLifePostReader();
  const { dailyLifePosts, isLoading, hasMore } = postManager;
  const { setTarget, isScrollHandlerOn, setIsScrollHandlerOn } =
    useIntersectionObserver(loadDayilyLifePosts);

  const handleInfiniteScrollToggle = () => {
    setIsScrollHandlerOn((prevState) => !prevState);
  };

  return (
    <>
      <CustomContainer align="spaceBetweenCenter" width="100%">
        <DailyLifePostQueryButtonList
          handleOrderByDesc={handleOrderByDesc}
          handleOrderByAsc={handleOrderByAsc}
        />
        <InfiniteScrollToggleButton
          isScrollHandlerOn={isScrollHandlerOn}
          handleToggle={handleInfiniteScrollToggle}
        />
      </CustomContainer>
      {isLoading && <div>포스트를 불러오는 중...</div>}
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
      {hasMore && !isScrollHandlerOn && (
        <RequestButton onClick={loadDayilyLifePosts}>더 불러오기</RequestButton>
      )}
      <CustomContainer>
        {!hasMore && "더 이상 포스트가 없습니다."}
      </CustomContainer>
    </>
  );
}
