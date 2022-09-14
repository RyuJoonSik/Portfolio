import { deleteObject, getStorage, ref } from "firebase/storage";
import { useState } from "react";

import firebaseApp from "../firebase/initFirebase";

export default function useFileDeleter() {
  const [isFileDeleted, setIsFileDeleted] = useState<boolean | null>(null);

  function deleteFile(
    filePath: string,
    onComplete?: () => void,
    onError?: (error: unknown) => void
  ) {
    setIsFileDeleted(false);
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, filePath);

    deleteObject(storageRef)
      .then(() => {
        onComplete && onComplete();
        setIsFileDeleted(true);
      })
      .catch((error) => {
        onError && onError(error);
      });
  }

  return [isFileDeleted, deleteFile] as const;
}
