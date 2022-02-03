import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";

import { SignInContext } from "../../pages/SignIn";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import UserTextField from "../../atoms/forms/UserTextfield";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 340,
  },
  box: {
    paddingTop: "2rem",
    textAlign: "center",
  },
  link: {
    color: "secondary",
  },
}));

const SignInCard = () => {
  const classes = useStyles();
  const { email, setEmail, password, setPassword, handleSubmit } =
    useContext(SignInContext);

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} title="サインイン" />
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
        <div className={classes.box}>
          <Typography variant="body2">
            まだアカウントをお持ちでない方は
            <Link to="/signup" className={classes.link}>
              こちら
            </Link>
            から作成してください。
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
