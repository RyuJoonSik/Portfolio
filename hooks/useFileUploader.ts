import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { useState } from "react";

import firebaseApp from "../firebase/initFirebase";

export default function useFileUploader() {
  const [uploadPercent, setUploadPercent] = useState<number | null>(null);

  function uploadFile(
    filePath: string,
    file: Blob | Uint8Array | ArrayBuffer,
    onComplete?: (downloadURL: string) => void,
    onChange?: (snapshot: UploadTaskSnapshot) => void,
    onError?: (error: unknown) => void
  ) {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, filePath);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        onChange && onChange(snapshot);
        setUploadPercent(progress);
      },
      (error) => {
        onError && onError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onComplete && onComplete(downloadURL);
      }
    );
  }

  return [uploadPercent, uploadFile] as const;
}
