import { useEffect, useReducer } from "react";
import {
  DocumentSnapshot,
  getDocs,
  OrderByDirection,
} from "firebase/firestore";

import { DailyLifePost } from "../types/dataModel";
import { createQueryByOrder, getDocsData } from "../firebase/fireStore";

type Action =
  | { type: "setOrderByDesc" }
  | { type: "setOrderByAsc" }
  | {
      type: "setPosts";
      posts: DailyLifePost[];
      lastDoc: DocumentSnapshot | null;
    }
  | {
      type: "load";
    };

interface InitialState {
  dailyLifePosts: DailyLifePost[];
  orderBy: OrderByDirection;
  cursor: DocumentSnapshot | null;
  isLoading: boolean;
}

const initialState: InitialState = {
  dailyLifePosts: [],
  cursor: null,
  orderBy: "desc",
  isLoading: true,
};

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "setOrderByDesc":
      return {
        dailyLifePosts: [],
        cursor: null,
        orderBy: "desc",
        isLoading: true,
      };
    case "setOrderByAsc":
      return {
        dailyLifePosts: [],
        cursor: null,
        orderBy: "asc",
        isLoading: true,
      };
    case "setPosts":
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
    default:
      throw new Error();
  }
}

export default function useDailyLifePostReader() {
  const [postManager, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function initDailyLifePosts() {
      if (postManager.isLoading) {
        console.log("data fetch 진입");
        const { orderBy, cursor } = postManager;
        const { docs } = await getDocs(createQueryByOrder(orderBy, cursor));

        dispatch({
          type: "setPosts",
          posts: getDocsData(docs),
          lastDoc: docs[docs.length - 1],
        });
      }
    }

    initDailyLifePosts();
  }, [postManager]);

  const loadDayilyLifePosts = async () => {
    dispatch({ type: "load" });
  };

  const handleOrderByDesc = () => {
    dispatch({ type: "setOrderByDesc" });
  };

  const handleOrderByAsc = () => {
    dispatch({ type: "setOrderByAsc" });
  };

  return {
    postManager,
    handleOrderByDesc,
    handleOrderByAsc,
    loadDayilyLifePosts,
  } as const;
}
