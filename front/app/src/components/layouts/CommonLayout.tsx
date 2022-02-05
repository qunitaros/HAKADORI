import React from "react";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlertMessage from "../utils/AlertMessage";

import Header from "./Header";
import useMatching from "../../lib/hooks/useMatching";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "3rem",
  },
}));

interface CommonLayoutProps {
  children: React.ReactNode;
}

// サインイン中共通のレイアウト
const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles();
  const { alertMessageOpen, setAlertMessageOpen } = useMatching();

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center">
            {children}
            <AlertMessage
              open={alertMessageOpen}
              setOpen={setAlertMessageOpen}
              severity="success"
              message="マッチングが成立しました!"
            />
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default CommonLayout;
