import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import firebaseApp from "../firebase/initFirebase";

interface UserAuthInfo {
  email: string;
  password: string;
}

export default function useUserLogin() {
  const { setUser } = useContext(UserContext);
  const navigation = useNavigate();

  async function handleLogin({ email, password }: UserAuthInfo) {
    const authentication = getAuth(firebaseApp);

    try {
      const USER_CREDENTIAL = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );

      alert(`로그인에 성공했습니다.`);

      setUser(USER_CREDENTIAL.user);

      navigation(-1);
    } catch (error) {
      alert(`로그인중에 문제가 발생했습니다.\n${error}`);
    }
  }

  return handleLogin;
}
