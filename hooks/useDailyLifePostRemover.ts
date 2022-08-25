import { useState } from "react";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { dailyLifePostPath } from "../firebase/fireStore";

export default function useDailyLifePostRemover() {
  const [isDailyLifePostRemoved, setIsDailyLifePostRemoved] = useState<
    boolean | null
  >(null);

  async function removeDailyLifePost(
    id: string,
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) {
    setIsDailyLifePostRemoved(false);

    const db = getFirestore(firebaseApp);

    try {
      await deleteDoc(doc(db, dailyLifePostPath, id));
      setIsDailyLifePostRemoved(true);

      onSuccess && onSuccess();
    } catch (error: unknown) {
      onError && onError(error);
    }
  }

  return [isDailyLifePostRemoved, removeDailyLifePost] as const;
}
