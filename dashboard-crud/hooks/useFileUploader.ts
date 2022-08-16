import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

import firebaseApp from "../firebase/initFirebase";

export default function useFileUploader() {
  const [isUploaded, setIsUploaded] = useState(false);

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
        console.log("isUploaded: " + isUploaded);
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        callback(downloadURL);

        setIsUploaded(true);
        console.log("isUploaded: " + isUploaded);
        console.log("File available at", downloadURL);
      }
    );
  }

  return { isUploaded, uploadFile };
}
