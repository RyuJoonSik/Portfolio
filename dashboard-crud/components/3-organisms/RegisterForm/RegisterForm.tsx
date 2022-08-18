import React from "react";

import EmailInput from "../../2-molecules/Input/EmailInput";
import Article from "../../1-atoms/Article/Article";
import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import PasswordInput from "../../2-molecules/Input/PasswordInput";
import useUserRegister from "../../../hooks/useUserRegister";
import useInputsValue from "../../../hooks/useInputsValue";
import PreventedSubmitForm from "../../1-atoms/Form/PreventedSubmitForm";
import FormSubmitButton from "../../1-atoms/Button/FormSubmitButton";

export default function RegisterForm(): JSX.Element {
  const handleRegister = useUserRegister();

  const [userAuthInfo, setUserAuthInfo] = useInputsValue({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    handleRegister(userAuthInfo);
  };

  return (
    <Article.Small>
      <ArticleHeader>
        <h3>회원가입 시작하기</h3>
      </ArticleHeader>
      <ArticleContentContainer>
        <PreventedSubmitForm>
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
          <FormSubmitButton type="button" onClick={handleClick}>
            회원가입
          </FormSubmitButton>
        </PreventedSubmitForm>
      </ArticleContentContainer>
    </Article.Small>
  );
}
