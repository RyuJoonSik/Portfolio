import { useEffect, useRef, useState } from "react";
import {
  collection,
  DocumentData,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePost } from "../types/dataModel";

function getQueriedDailyLifePosts(querySnapshot: QuerySnapshot<DocumentData>) {
  const queriedDailyLifePosts: DailyLifePost[] = [];

  querySnapshot.forEach((doc) => {
    const { title, content, downloadURL, requestedAt } =
      doc.data() as DailyLifePost;

    queriedDailyLifePosts.push({
      id: doc.id,
      title,
      content,
      downloadURL,
      requestedAt,
    });
  });

  return queriedDailyLifePosts;
}

export default function useDailyLifePostReader() {
  const [dailyLifePosts, setDailyLifePosts] = useState<DailyLifePost[]>([]);

  const { current: fireStore } = useRef(getFirestore(firebaseApp));

  useEffect(() => {
    console.log("onSnaphot enroll");

    const unsubscribe = onSnapshot(
      query(
        collection(fireStore, "dailyLifePosts"),
        orderBy("requestedAt", "desc"),
        limit(5)
      ),
      (querySnapshot) => {
        console.log("onSnapshot fire");

        const queriedDailyLifePosts = getQueriedDailyLifePosts(querySnapshot);
        setDailyLifePosts(queriedDailyLifePosts);
      }
    );

    return unsubscribe;
  }, []);

  return dailyLifePosts;
}
