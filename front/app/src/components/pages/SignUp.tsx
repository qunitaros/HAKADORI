import React, { createContext } from "react";

import useSignUp from "../../lib/hooks/useSignUp";
import SignUpCard from "../organisms/cards/SignUpCard";
import AlertMessage from "../utils/AlertMessage";

export const SignUpContext = createContext(
  {} as {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordConfirmation: string;
    setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>;
    prefecture: number;
    setPrefecture: React.Dispatch<React.SetStateAction<number>>;
    birthday: Date | undefined | string;
    setBirthday: React.Dispatch<
      React.SetStateAction<Date | undefined | string>
    >;
    gender: number;
    setGender: React.Dispatch<React.SetStateAction<number>>;
    field: number;
    setField: React.Dispatch<React.SetStateAction<number>>;
    dayOff: number;
    setDayOff: React.Dispatch<React.SetStateAction<number>>;
    preview: string;
    setPreview: React.Dispatch<React.SetStateAction<string>>;
    uploadImage: any;
    previewImage: any;
    handleSubmit: any;
  }
);

// サインアップ用ページ
const SignUp: React.FC = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    prefecture,
    setPrefecture,
    birthday,
    setBirthday,
    gender,
    setGender,
    field,
    setField,
    dayOff,
    setDayOff,
    preview,
    setPreview,
    uploadImage,
    previewImage,
    alertMessageOpen,
    setAlertMessageOpen,
    handleSubmit,
  } = useSignUp();

  return (
    <SignUpContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        prefecture,
        setPrefecture,
        birthday,
        setBirthday,
        gender,
        setGender,
        field,
        setField,
        dayOff,
        setDayOff,
        preview,
        setPreview,
        uploadImage,
        previewImage,
        handleSubmit,
      }}
    >
      <SignUpCard />
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="アカウントの作成に失敗しました。確認用パスワードが合っているか、空欄がないか確認してください。"
      />
    </SignUpContext.Provider>
  );
};

export default SignUp;
