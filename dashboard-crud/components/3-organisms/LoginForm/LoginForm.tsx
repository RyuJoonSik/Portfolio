import React from "react";

import BlueButton from "../../1-atoms/Button/BlueButton";
import Article from "../../1-atoms/Article/Article";
import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import PasswordInput from "../../2-molecules/Input/PasswordInput";
import useUserLogin from "../../../hooks/useUserLogin";
import EmailInput from "../../2-molecules/Input/EmailInput";
import useInputsValue from "../../../hooks/useInputsValue";
import PreventedSubmitForm from "../../1-atoms/Form/PreventedSubmitForm";

export default function LoginForm(): JSX.Element {
  const handleLogin = useUserLogin();
  const [userAuthInfo, setUserAuthInfo] = useInputsValue({
    email: "",
    password: "",
  });

  const handleClick = () => {
    handleLogin(userAuthInfo);
  };

  return (
    <Article.Small>
      <ArticleHeader>
        <h3>로그인 시작하기</h3>
      </ArticleHeader>
      <ArticleContentContainer>
        <PreventedSubmitForm>
          <EmailInput
            value={userAuthInfo.email}
            handleChange={setUserAuthInfo}
            handleEnter={handleClick}
          />
          <PasswordInput
            value={userAuthInfo.password}
            handleChange={setUserAuthInfo}
            handleEnter={handleClick}
          />
          <BlueButton.Rectangle.Full type="button" onClick={handleClick}>
            로그인
          </BlueButton.Rectangle.Full>
        </PreventedSubmitForm>
      </ArticleContentContainer>
    </Article.Small>
  );
}
