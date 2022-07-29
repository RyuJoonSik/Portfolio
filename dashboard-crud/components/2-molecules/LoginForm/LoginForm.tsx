import React, { useState, useCallback, useContext } from "react";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";

import MainSmallContentItemContainer from "../../1-atoms/Box/MainSmallContentItemContainer";
import H3 from "../../1-atoms/Heading/H3";
import Form from "../../1-atoms/Form/Form";
import Input from "../../1-atoms/Input/Input";
import FullBlueButton from "../../1-atoms/Button/FullBlueButton";
import SmallIcon from "../../1-atoms/Icon/SmallIcon";
import InputContainer from "../../1-atoms/Box/InputContainer";
import MainContentItemHeader from "../../1-atoms/Header/MainContentItemHeader";
import Nav from "../../1-atoms/Navigation/Nav";
import SmallTextButton from "../../1-atoms/Button/SmallTextButton";
import { login } from "../../../firebase/authentication";
import { UserContext } from "../../../contexts/UserContext";

export default function LoginForm(): JSX.Element {
  const { setUser } = useContext(UserContext);

  const [userAuthInfo, setUserAuthInfo] = useState({
    id: "",
    password: "",
  });

  const handleChange = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setUserAuthInfo((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    []
  );

  const handleClick = async () => {
    const NEW_USER = await login(userAuthInfo);

    if (NEW_USER) {
      setUser(NEW_USER);
    } else {
      console.log(
        "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
      );
    }
  };
  return (
    <MainSmallContentItemContainer>
      <MainContentItemHeader>
        <H3>안녕하세요!</H3>
      </MainContentItemHeader>
      <Form>
        <InputContainer>
          <SmallIcon as={Email} />
          <Input
            placeholder="이메일"
            type="email"
            value={userAuthInfo.id}
            name="id"
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <SmallIcon as={Lock} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={userAuthInfo.password}
            name="password"
            onChange={handleChange}
          />
        </InputContainer>
        <FullBlueButton type="button" onClick={handleClick}>
          로그인
        </FullBlueButton>
        <Nav>
          <SmallTextButton to="/register">회원가입</SmallTextButton>
        </Nav>
      </Form>
    </MainSmallContentItemContainer>
  );
}
