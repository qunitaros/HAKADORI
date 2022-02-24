import React, { createContext } from "react";

import AlertMessage from "../utils/AlertMessage";
import useSignIn from "../../lib/hooks/useSignIn";
import SignInCard from "../organisms/cards/SignInCard";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Container)(() => ({
  paddingTop: "3rem",
  paddingBottom: "6rem",
}));

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
const SignIn: React.FC = React.memo(() => {
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
      <StyledContainer>
        <Grid container justifyContent="center">
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
        </Grid>
      </StyledContainer>
    </>
  );
});

export default SignIn;
