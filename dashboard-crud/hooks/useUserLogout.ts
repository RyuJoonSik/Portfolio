import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import firebaseApp from "../firebase/initFirebase";

export default function useUserLogout() {
  const { setUser } = useContext(UserContext);

  async function handleLogout() {
    const authentication = getAuth(firebaseApp);

    try {
      await signOut(authentication);
      alert(`로그아웃에 성공했습니다.`);

      setUser(null);
    } catch (error) {
      alert(`로그아웃중에 문제가 발생했습니다.\n${error}`);
    }
  }

  return handleLogout;
}
