import React, { createContext } from "react";

import useSignUp from "../../lib/hooks/useSignUp";
import SignUpCard from "../organisms/cards/SignUpCard";
import AlertMessage from "../utils/AlertMessage";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

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

const StyledContainer = styled(Container)(() => ({
  paddingTop: "3rem",
  paddingBottom: "6rem",
}));

// サインアップ用ページ
const SignUp: React.FC = React.memo(() => {
  console.log("render");
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
      <StyledContainer>
        <Grid container justifyContent="center">
          <SignUpCard />
          <AlertMessage // エラーが発生した場合はアラートを表示
            open={alertMessageOpen}
            setOpen={setAlertMessageOpen}
            severity="error"
            message="アカウントの作成に失敗しました。確認用パスワードが合っているか、空欄がないか確認してください。"
          />
        </Grid>
      </StyledContainer>
    </SignUpContext.Provider>
  );
});

export default SignUp;
