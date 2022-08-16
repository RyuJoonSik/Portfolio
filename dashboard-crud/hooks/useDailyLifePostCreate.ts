import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePostItem } from "../types/dataModel";

export default function useDailyLifePostCreate(callback: () => void) {
  const db = getFirestore(firebaseApp);

  async function createDailyLifePost({
    title,
    content,
    downloadURL,
  }: DailyLifePostItem) {
    try {
      const docRef = await addDoc(collection(db, "dailyLifePosts"), {
        title,
        content,
        downloadURL: downloadURL || "",
        requestedAt: Timestamp.now(),
      });

      alert(`등록 성공: ${docRef.id}`);

      callback();
    } catch (e) {
      alert(`등록 실패: ${e}`);
    }
  }

  return createDailyLifePost;
}
