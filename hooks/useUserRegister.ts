import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import firebaseApp from "../firebase/initFirebase";

interface UserAuthInfo {
  email: string;
  password: string;
}

export default function useUserRegister() {
  async function handleRegister(
    { email, password }: UserAuthInfo,
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) {
    const authentication = getAuth(firebaseApp);

    try {
      await createUserWithEmailAndPassword(authentication, email, password);

      onSuccess && onSuccess();
    } catch (error: unknown) {
      onError && onError(error);
    }
  }

  return handleRegister;
}
