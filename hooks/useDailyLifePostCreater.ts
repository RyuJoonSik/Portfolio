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
import { imagePath } from "../firebase/storage";
import { DailyLifePostInput } from "../types/dataModel";
import useFileUploader from "./useFileUploader";

export default function useDailyLifePostCreater() {
  const [isDailyLifePostCreated, setIsDailyLifePostCreated] = useState<
    boolean | null
  >(null);
  const [uploadPercent, uploadFile] = useFileUploader();

  async function createDailyLifePost(
    { title, content, imageURL, imagePath }: DailyLifePostInput,
    onSuccess?: (doc: DocumentReference<DocumentData>) => void,
    onError?: (e: unknown) => void
  ) {
    const db = getFirestore(firebaseApp);

    setIsDailyLifePostCreated((prevState) => !!prevState);
    try {
      const doc = await addDoc(collection(db, dailyLifePostPath), {
        title,
        content,
        imageURL: imageURL || null,
        imagePath: imagePath || null,
        requestedAt: Timestamp.now(),
      });

      onSuccess && onSuccess(doc);
      setIsDailyLifePostCreated((prevState) => !prevState);
    } catch (e) {
      console.log(e);
      onError && onError(e);
    }
  }

  const createPostWithImg = (dailyLifePost: DailyLifePostInput, file: File) => {
    uploadFile(
      `${imagePath + Date.now()}`,
      file,
      (imageURL: string, imagePath: string) => {
        createDailyLifePost({
          ...dailyLifePost,
          imageURL,
          imagePath,
        });
      }
    );
  };

  return [
    isDailyLifePostCreated,
    createDailyLifePost,
    createPostWithImg,
    uploadPercent,
  ] as const;
}
