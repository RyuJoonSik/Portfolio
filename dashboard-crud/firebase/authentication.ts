import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import { Dispatch } from "react";

import APP from "./initFirebase";

interface userAuthInfo {
  id: string;
  password: string;
}

export async function register({ id, password }: userAuthInfo) {
  const AUTHENTICATION = getAuth(APP);

  try {
    const USER_CREDENTIAL = await createUserWithEmailAndPassword(
      AUTHENTICATION,
      id,
      password
    );

    console.log("register success");

    return USER_CREDENTIAL.user;
  } catch ({ code, message }: unknown) {
    console.log("register fail", code, message);
  }
}

export async function login({ id, password }: userAuthInfo) {
  const AUTHENTICATION = getAuth(APP);

  try {
    const USER_CREDENTIAL = await signInWithEmailAndPassword(
      AUTHENTICATION,
      id,
      password
    );

    return USER_CREDENTIAL.user;
  } catch ({ code, message }: unknown) {
    console.log(code);
    console.log(message);
  }
}

export async function logout(setUser: Dispatch<User | null>) {
  const AUTHENTICATION = getAuth(APP);

  try {
    await signOut(AUTHENTICATION);

    setUser(null);
  } catch ({ code, message }: unknown) {
    console.log(code);
    console.log(message);
  }
}

export function setLoginedUser(setUser: Dispatch<User | null>) {
  const AUTHENTICATION = getAuth(APP);

  onAuthStateChanged(AUTHENTICATION, (user) => {
    setUser(user);
  });
}
