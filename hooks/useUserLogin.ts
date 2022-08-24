import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import firebaseApp from "../firebase/initFirebase";

interface UserAuthInfo {
  email: string;
  password: string;
}

export default function useUserLogin() {
  async function handleLogin(
    { email, password }: UserAuthInfo,
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) {
    const authentication = getAuth(firebaseApp);

    try {
      await signInWithEmailAndPassword(authentication, email, password);

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }

  return handleLogin;
}
