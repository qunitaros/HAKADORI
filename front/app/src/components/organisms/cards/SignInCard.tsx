import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { SignInContext } from "../../pages/SignIn";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import UserTextField from "../../atoms/forms/UserTextfield";

const StyledHeader = styled(CardHeader)(() => ({
  textAlign: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 340,
}));

const StyledBox = styled("div")(() => ({
  paddingTop: "2rem",
  textAlign: "center",
}));

const StyledLink = styled(Link)(() => ({
  color: "secondary",
}));

const SignInCard = React.memo(() => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useContext(SignInContext);

  return (
    <StyledCard>
      <StyledHeader title="ログイン" />
      <CardContent>
        <UserTextField
          label="メールアドレス"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <UserTextField
          label="パスワード"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <div style={{ textAlign: "right" }}>
          <SubmitButton
            disabled={!email || !password ? true : false}
            onClick={handleSubmit}
          >
            ログイン
          </SubmitButton>
        </div>
        <StyledBox>
          <Typography variant="body2">
            まだアカウントをお持ちでない方は
            <StyledLink to="/signup">こちら</StyledLink>
            から作成してください。
          </Typography>
        </StyledBox>
      </CardContent>
    </StyledCard>
  );
});

export default SignInCard;
