import React from "react";
import { useNavigate } from "react-router-dom";

import useInputsValue from "../../../hooks/useInputsValue";
import useUserRegister from "../../../hooks/useUserRegister";
import SmallArticle from "../../atoms/Article/SmallArticle";
import RequestButton from "../../atoms/Button/RequestButton";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import PreventDefaultForm from "../../atoms/Form/PreventDefaultForm";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import EmailInput from "../Input/EmailInput";
import PasswordInput from "../Input/PasswordInput";

export default function RegisterForm(): JSX.Element {
  const [userAuthInfo, setUserAuthInfo] = useInputsValue({
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const register = useUserRegister();

  const handleClick = async () => {
    register(userAuthInfo, () => navigation("/"), alert);
  };

  return (
    <SmallArticle>
      <ArticleHeader>
        <h3>회원가입 시작하기</h3>
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
            회원가입
          </RequestButton>
        </PreventDefaultForm>
      </ArticleContentsContainer>
    </SmallArticle>
  );
}
