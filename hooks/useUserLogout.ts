import { getAuth, signOut } from "firebase/auth";

import firebaseApp from "../firebase/initFirebase";

export default function useUserLogout() {
  async function handleLogout(
    onSuccess?: () => void,
    onError?: (error: unknown) => void
  ) {
    const authentication = getAuth(firebaseApp);

    try {
      await signOut(authentication);
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }

  return handleLogout;
}
