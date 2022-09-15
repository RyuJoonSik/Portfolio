import { useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

import firebaseApp from "../firebase/initFirebase";
import { dailyLifePostPath } from "../firebase/fireStore";
import { DailyLifePost, DailyLifePostInput } from "../types/dataModel";
import useFileDeleter from "./useFileDeleter";
import useFileUploader from "./useFileUploader";
import { imagePath } from "../firebase/storage";

export default function useDailyLifePostUpdater() {
  const [isDailyLifePostUpdateed, setIsDailyLifePostUpdateed] = useState<
    boolean | null
  >(null);
  const [isFileDeleted, deleteFile] = useFileDeleter();
  const [uploadPercent, uploadFile] = useFileUploader();

  const updateDailyLifePost = async (
    id: string,
    dailyLifePost: DailyLifePostInput,
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) => {
    setIsDailyLifePostUpdateed(false);

    const db = getFirestore(firebaseApp);

    try {
      await updateDoc(doc(db, dailyLifePostPath, id), dailyLifePost);
      setIsDailyLifePostUpdateed(true);

      onSuccess && onSuccess();
    } catch (error: unknown) {
      onError && onError(error);
    }
  };

  const updatePostWithNoImg = (
    prevDailyLifePost: DailyLifePost,
    dailyLifePost: DailyLifePostInput
  ) => {
    const updatePost = () => {
      updateDailyLifePost(prevDailyLifePost.id, {
        ...dailyLifePost,
        // imageURL: null,
        // imagePath: null,
      });
    };

    // if (prevDailyLifePost.imagePath) {
    //   return deleteFile(prevDailyLifePost.imagePath, updatePost);
    // }

    updatePost();
  };

  const updatePostWithImg = (
    prevDailyLifePost: DailyLifePost,
    dailyLifePost: DailyLifePostInput,
    file: File
  ) => {
    const updatePost = () => {
      uploadFile(
        `${imagePath + Date.now()}`,
        file,
        (imageURL: string, imagePath: string) => {
          updateDailyLifePost(prevDailyLifePost.id, {
            ...dailyLifePost,
            imageURL,
            imagePath,
          });
        }
      );
    };

    if (prevDailyLifePost.imagePath) {
      return deleteFile(prevDailyLifePost.imagePath, updatePost);
    }
    updatePost();
  };

  return [
    isDailyLifePostUpdateed,
    updatePostWithNoImg,
    updatePostWithImg,
    uploadPercent,
  ] as const;
}
