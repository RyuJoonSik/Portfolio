import React, { useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";
import LogoutButton from "./LogoutButton";
import LoginLinkButton from "./LoginLinkButton";

export default function UserLoginStateButton(): JSX.Element {
  const { user } = useContext(UserContext);

  return user ? <LogoutButton /> : <LoginLinkButton />;
}
