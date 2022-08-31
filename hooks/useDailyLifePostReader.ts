import { useEffect, useState } from "react";
import {
  DocumentSnapshot,
  getDocs,
  OrderByDirection,
} from "firebase/firestore";

import { DailyLifePost } from "../types/dataModel";
import { createQueryByOrder, getDocsData } from "../firebase/fireStore";

export default function useDailyLifePostReader() {
  const [dailyLifePosts, setDailyLifePosts] = useState<DailyLifePost[]>([]);
  const [order, setOrder] = useState<OrderByDirection>("desc");
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isMorePostLoading, setIsMorePostLoading] = useState(false);
  const [lastSnapshot, setLastSnapshot] = useState<DocumentSnapshot | null>(
    null
  );

  useEffect(() => {
    setIsInitialLoading(true);
  }, []);

  useEffect(() => {
    console.log("second Effect");
    async function initDailyLifePosts() {
      if (isInitialLoading) {
        const { docs } = await getDocs(createQueryByOrder(order, null, 5));
        setLastSnapshot(docs[docs.length - 1]);
        setDailyLifePosts(getDocsData<DailyLifePost>(docs));
        setIsInitialLoading(false);
      }
    }

    initDailyLifePosts();
  }, [order, isInitialLoading]);

  useEffect(() => {
    async function loadDailyLifePosts() {
      if (isMorePostLoading) {
        const { docs } = await getDocs(
          createQueryByOrder(order, lastSnapshot, 5)
        );
        setLastSnapshot(docs[docs.length - 1]);
        setDailyLifePosts((prevDailyLifePosts) => [
          ...prevDailyLifePosts,
          ...getDocsData<DailyLifePost>(docs),
        ]);
        setIsMorePostLoading(false);
      }
    }

    loadDailyLifePosts();
  }, [isMorePostLoading]);

  const loadDayilyLifePosts = async () => {
    setIsMorePostLoading(true);
    // if (!lastSnapshot) {
    //   alert("포스트가 없습니다.");
    //   return;
    // }
    // const { docs } = await getDocs(createQueryByOrder(order, lastSnapshot, 5));
    // const lastDoc = docs[docs.length - 1];
    // if (!lastDoc) {
    //   alert("포스트가 없습니다.");
    //   setLastSnapshot(null);
    //   return;
    // }
    // setLastSnapshot(lastDoc);
    // setDailyLifePosts((prevDailyLifePosts) => [
    //   ...prevDailyLifePosts,
    //   ...getDocsData<DailyLifePost>(docs),
    // ]);
  };

  const handleOrderByDesc = () => {
    setOrder("desc");
    // setIsLoading(true);
  };

  const handleOrderByAsc = () => {
    setOrder("asc");
    // setIsLoading(true);
  };

  return {
    dailyLifePosts,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
    isInitialLoading,
    isMorePostLoading,
  } as const;
}
