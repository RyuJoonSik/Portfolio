import React from "react";
import { useNavigate } from "react-router-dom";
import useInputsValue from "../../../hooks/useInputsValue";
import useUserLogin from "../../../hooks/useUserLogin";

import Article from "../../atoms/Article/Article";
import { TextLinkButton } from "../../atoms/Button/TextButton";
import RequestButton from "../../atoms/Button/RequestButton";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import CustomContainer from "../../atoms/Container/CustomContainer";
import PreventDefaultForm from "../../atoms/Form/PreventDefaultForm";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import CustomInput from "../../atoms/Input/CustomInput";

export default function LoginForm(): JSX.Element {
  const login = useUserLogin();
  const navigation = useNavigate();
  const [userAuthInfo, setUserAuthInfo] = useInputsValue({
    email: "",
    password: "",
  });

  const handleClick = () => {
    login(
      userAuthInfo,
      () => {
        navigation(-1);
      },
      alert
    );
  };

  const { email, password } = userAuthInfo;

  return (
    <Article size="small">
      <ArticleHeader>
        <h3>로그인 시작하기</h3>
      </ArticleHeader>
      <ArticleContentsContainer>
        <PreventDefaultForm>
          <CustomInput
            label="이메일"
            placeholder="id@email.com 형식으로 입력해 주세요."
            type="email"
            value={email}
            id={"email"}
            handleChange={setUserAuthInfo}
            handleEnter={handleClick}
          />
          <CustomInput
            label="비밀번호"
            placeholder="비밀번호 6자리를 입력해 주세요."
            type="password"
            value={password}
            id={"password"}
            handleChange={setUserAuthInfo}
            handleEnter={handleClick}
          />
          <RequestButton type="button" onClick={handleClick}>
            로그인
          </RequestButton>
        </PreventDefaultForm>
        <CustomContainer align="center">
          <TextLinkButton to="/register">회원가입</TextLinkButton>
        </CustomContainer>
      </ArticleContentsContainer>
    </Article>
  );
}
