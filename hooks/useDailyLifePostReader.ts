import { useCallback, useEffect, useReducer } from "react";
import {
  doc,
  DocumentSnapshot,
  getDocs,
  OrderByDirection,
} from "firebase/firestore";

import { DailyLifePost } from "../types/dataModel";
import { createQueryByOrder, getDocsData } from "../firebase/fireStore";

type Action =
  | { type: "init"; orderBy: OrderByDirection }
  | {
      type: "set";
      posts: DailyLifePost[];
      lastDoc: DocumentSnapshot | null;
    }
  | {
      type: "load";
    }
  | {
      type: "end";
    };

interface InitialState {
  dailyLifePosts: DailyLifePost[];
  orderBy: OrderByDirection;
  cursor: DocumentSnapshot | null;
  isLoading: boolean;
  hasMore: boolean;
}

function initState(orderBy: OrderByDirection): InitialState {
  return {
    dailyLifePosts: [],
    cursor: null,
    orderBy: orderBy,
    isLoading: true,
    hasMore: true,
  };
}

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "init":
      return initState(action.orderBy);

    case "set":
      return {
        ...state,
        dailyLifePosts: [...state.dailyLifePosts, ...action.posts],
        cursor: action.lastDoc,
        isLoading: false,
      };
    case "load":
      return {
        ...state,
        isLoading: true,
      };
    case "end":
      return {
        ...state,
        isLoading: false,
        hasMore: false,
      };
      throw new Error();
  }
}

export default function useDailyLifePostReader() {
  const [postManager, dispatch] = useReducer(reducer, {
    dailyLifePosts: [],
    cursor: null,
    orderBy: "desc",
    isLoading: true,
    hasMore: true,
  });

  useEffect(() => {
    async function initDailyLifePosts() {
      if (postManager.isLoading) {
        const { orderBy, cursor } = postManager;
        const { docs } = await getDocs(createQueryByOrder(orderBy, cursor, 5));

        if (docs.length === 0) {
          dispatch({ type: "end" });
          return;
        }

        dispatch({
          type: "set",
          posts: getDocsData(docs),
          lastDoc: docs[docs.length - 1],
        });
      }
    }

    initDailyLifePosts();
  }, [postManager]);

  const loadDayilyLifePosts = () => {
    if (postManager.cursor) {
      dispatch({ type: "load" });
    }
  };

  const handleOrderByDesc = () => {
    dispatch({ type: "init", orderBy: "desc" });
  };

  const handleOrderByAsc = () => {
    dispatch({ type: "init", orderBy: "asc" });
  };

  return {
    postManager,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
  } as const;
}
