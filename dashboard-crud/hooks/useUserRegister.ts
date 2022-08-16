import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import firebaseApp from "../firebase/initFirebase";

interface UserAuthInfo {
  email: string;
  password: string;
}

export default function useUserRegister() {
  const { setUser } = useContext(UserContext);
  const navigation = useNavigate();

  async function handleRegister({ email, password }: UserAuthInfo) {
    const authentication = getAuth(firebaseApp);

    try {
      const USER_CREDENTIAL = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );

      alert(`회원가입에 성공했습니다.`);

      setUser(USER_CREDENTIAL.user);

      navigation("/");
    } catch (error) {
      alert(`회원가입중에 문제가 발생했습니다.\n${error}`);
    }
  }

  return handleRegister;
}
