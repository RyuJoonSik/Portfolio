import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

import firebaseApp from "../firebase/initFirebase";

export default function useFileUploader() {
  const [uploadPercent, setUploadPercent] = useState<number | null>(null);

  function uploadFile(
    filePath: string,
    file: Blob | Uint8Array | ArrayBuffer,
    callback: (downloadURL: string) => void
  ) {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, filePath);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setUploadPercent(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        callback(downloadURL);
      }
    );
  }

  return { uploadPercent, uploadFile };
}
