import React from "react";

import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "./Header";
import BottomBar from "./BottomBar";
import BackToTopButton from "../atoms/buttons/BackToTopButton";

const StyledContainer = styled(Container)(() => ({
  paddingTop: "3rem",
  paddingBottom: "6rem",
}));

interface CommonLayoutProps {
  children: React.ReactNode;
}

// サインイン中共通のレイアウト
const CommonLayout = React.memo(({ children }: CommonLayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <StyledContainer>
          <Grid container justifyContent="center">
            {children}
          </Grid>
        </StyledContainer>
        <BackToTopButton />
      </main>
      <footer>
        <BottomBar />
      </footer>
    </>
  );
});

export default CommonLayout;
