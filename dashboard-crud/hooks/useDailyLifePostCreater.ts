import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePostItem } from "../types/dataModel";

export default function useDailyLifePostCreater() {
  const [dayilPostIsCreated, setDayilPostIsCreated] = useState<boolean | null>(
    null
  );

  const db = getFirestore(firebaseApp);

  async function createDailyLifePost({
    title,
    content,
    downloadURL,
  }: DailyLifePostItem) {
    setDayilPostIsCreated((prevState) => !!prevState);

    try {
      await addDoc(collection(db, "dailyLifePosts"), {
        title,
        content,
        downloadURL: downloadURL || "",
        requestedAt: Timestamp.now(),
      });

      setDayilPostIsCreated((prevState) => !prevState);
    } catch (e) {
      alert(`등록 실패: ${e}`);
    }
  }

  return { createDailyLifePost, dayilPostIsCreated };
}
