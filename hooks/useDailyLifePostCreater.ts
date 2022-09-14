import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";
import { dailyLifePostPath } from "../firebase/fireStore";

import firebaseApp from "../firebase/initFirebase";
import { DailyLifePostInput } from "../types/dataModel";

export default function useDailyLifePostCreater() {
  const [isDailyLifePostCreated, setIsDailyLifePostCreated] = useState<
    boolean | null
  >(null);

  const db = getFirestore(firebaseApp);

  async function createDailyLifePost(
    { title, content, imageURL, imagePath }: DailyLifePostInput,
    onSuccess?: (doc: DocumentReference<DocumentData>) => void,
    onError?: (e: unknown) => void
  ) {
    setIsDailyLifePostCreated((prevState) => !!prevState);
    try {
      const doc = await addDoc(collection(db, dailyLifePostPath), {
        title,
        content,
        imageURL: imageURL || null,
        imagePath: imagePath || null,
        requestedAt: Timestamp.now(),
      });
      console.log(doc);

      onSuccess && onSuccess(doc);
      setIsDailyLifePostCreated((prevState) => !prevState);
    } catch (e) {
      console.log(e);
      onError && onError(e);
    }
  }

  return [isDailyLifePostCreated, createDailyLifePost] as const;
}
