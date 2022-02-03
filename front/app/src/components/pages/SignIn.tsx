import React, { createContext } from "react";

import AlertMessage from "../utils/AlertMessage";
import useSignIn from "../../lib/hooks/useSignIn";
import SignInCard from "../organisms/cards/SignInCard";

export const SignInContext = createContext(
  {} as {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: any;
  }
);

// サインイン用ページ
const SignIn: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    alertMessageOpen,
    setAlertMessageOpen,
  } = useSignIn();

  return (
    <>
      <form noValidate autoComplete="off">
        <SignInContext.Provider
          value={{ email, setEmail, password, setPassword, handleSubmit }}
        >
          <SignInCard />
        </SignInContext.Provider>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="メールアドレスかパスワードが間違っています"
      />
    </>
  );
};

export default SignIn;
