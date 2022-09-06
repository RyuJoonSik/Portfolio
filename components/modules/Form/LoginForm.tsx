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
import EmailInput from "../Input/EmailInput";
import PasswordInput from "../Input/PasswordInput";

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

  return (
    <Article size="small">
      <ArticleHeader>
        <h3>로그인 시작하기</h3>
      </ArticleHeader>
      <ArticleContentsContainer>
        <PreventDefaultForm>
          <EmailInput
            value={userAuthInfo.email}
            id="email"
            handleChange={setUserAuthInfo}
            handleEnter={handleClick}
          />
          <PasswordInput
            value={userAuthInfo.password}
            id="password"
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
