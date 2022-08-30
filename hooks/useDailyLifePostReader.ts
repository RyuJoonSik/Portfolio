import { useEffect, useRef, useState, useReducer } from "react";
import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  QuerySnapshot,
  startAfter,
  startAt,
} from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePost } from "../types/dataModel";
import fireStore, {
  dailyLifePostPath,
  getDocsData,
  queryWithUndefined,
} from "../firebase/fireStore";

type ACTIONTYPE =
  | { type: "orderByDesc" }
  | { type: "orderByAsc" }
  | { type: "orderByDescFrom"; payload: DocumentSnapshot }
  | { type: "orderByAscFrom"; payload: DocumentSnapshot };

const queryOrderByDesc = queryWithUndefined(
  collection(fireStore, dailyLifePostPath),
  orderBy("requestedAt", "desc"),
  limit(10)
);

const queryOrderByAsc = query(
  collection(fireStore, dailyLifePostPath),
  orderBy("requestedAt"),
  limit(10)
);

const initialQuery = queryOrderByDesc;

function reducer(state: typeof initialQuery, action: ACTIONTYPE) {
  switch (action.type) {
    case "orderByDesc":
      return queryOrderByDesc;
    case "orderByAsc":
      return queryOrderByAsc;
    case "orderByDescFrom":
      return query(
        collection(fireStore, dailyLifePostPath),
        orderBy("requestedAt", "desc"),
        startAfter(action.payload),
        limit(10)
      );
    case "orderByAscFrom":
      return query(
        collection(fireStore, dailyLifePostPath),
        orderBy("requestedAt"),
        startAfter(action.payload),
        limit(10)
      );
    default:
      throw new Error();
  }
}

export default function useDailyLifePostReader() {
  const [dailyLifePosts, setDailyLifePosts] = useState<DailyLifePost[]>([]);
  const { current: fireStore } = useRef(getFirestore(firebaseApp));
  const [query, dispatch] = useReducer(reducer, initialQuery);

  async function loadDailyLifePosts() {
    const { docs } = await getDocs(query);
    const lastVisible = docs[docs.length - 1];

    if (!lastVisible) {
      console.log("마지막");
      return;
    }

    const newDailyLifePosts = getDocsData(docs) as DailyLifePost[];
    setDailyLifePosts((prevPosts) => [...prevPosts, ...newDailyLifePosts]);
  }

  function setOrderByDesc() {
    dispatch({ type: "orderByDesc" });

    setDailyLifePosts([]);
  }

  function setOrderByAsc() {
    dispatch({ type: "orderByAsc" });

    setDailyLifePosts([]);
  }

  return [dailyLifePosts, loadDailyLifePosts] as const;
}
