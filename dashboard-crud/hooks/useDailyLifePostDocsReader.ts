import { useEffect, useRef, useState } from "react";
import {
  collection,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePostDocument } from "../types/dataModel";

export default function useDailyLifePostDocsReader() {
  const [dailyLifePostDocs, setDailyLifePostDocs] = useState<
    DailyLifePostDocument[]
  >([]);

  const { current: fireStore } = useRef(getFirestore(firebaseApp));

  useEffect(() => {
    startAt;
    console.log("onSnaphot enroll");
    const unsubscribe = onSnapshot(
      query(
        collection(fireStore, "dailyLifePosts"),
        orderBy("requestedAt", "desc"),
        limit(5)
      ),
      (querySnapshot) => {
        console.log("onSnapshot fire");
        const newDailyLifePostDocs: DailyLifePostDocument[] = [];

        querySnapshot.forEach((doc) => {
          const { title, content, downloadURL, requestedAt } =
            doc.data() as DailyLifePostDocument;

          newDailyLifePostDocs.push({
            id: doc.id,
            title,
            content,
            downloadURL,
            requestedAt,
          });
        });

        setDailyLifePostDocs(newDailyLifePostDocs);
      }
    );

    return unsubscribe;
  }, []);

  return dailyLifePostDocs;
}
