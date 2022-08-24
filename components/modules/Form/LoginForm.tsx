import React from "react";
import { useNavigate } from "react-router-dom";
import useInputsValue from "../../../hooks/useInputsValue";
import useUserLogin from "../../../hooks/useUserLogin";

import SmallArticle from "../../atoms/Article/SmallArticle";
import SubmitButton from "../../atoms/Button/SubmitButton";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
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
    login(userAuthInfo, () => {
      navigation("/");
    });
  };

  return (
    <SmallArticle>
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
          <SubmitButton type="button" onClick={handleClick}>
            로그인
          </SubmitButton>
        </PreventDefaultForm>
      </ArticleContentsContainer>
    </SmallArticle>
  );
}
