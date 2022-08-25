import { useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { dailyLifePostPath } from "../firebase/fireStore";
import { DailyLifePostInput } from "../types/dataModel";

export default function useDailyLifePostUpdater() {
  const [isDailyLifePostUpdateed, setIsDailyLifePostUpdateed] = useState<
    boolean | null
  >(null);

  async function updateDailyLifePost(
    id: string,
    DailyLifePost: DailyLifePostInput,
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) {
    setIsDailyLifePostUpdateed(false);

    const db = getFirestore(firebaseApp);

    try {
      await updateDoc(doc(db, dailyLifePostPath, id), DailyLifePost);
      setIsDailyLifePostUpdateed(true);

      onSuccess && onSuccess();
    } catch (error: unknown) {
      onError && onError(error);
    }
  }

  return [isDailyLifePostUpdateed, updateDailyLifePost] as const;
}
