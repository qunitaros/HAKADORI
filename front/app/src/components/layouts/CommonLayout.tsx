import React from "react";

import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "./Header";
import BottomBar from "./BottomBar";

const StyledContainer = styled(Container)(() => ({
  paddingTop: "3rem",
  paddingBottom: "6rem",
  backgroundColor: "#fffff9",
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
        <StyledContainer maxWidth="lg">
          <Grid container justifyContent="center">
            {children}
          </Grid>
        </StyledContainer>
      </main>
      <footer>
        <BottomBar />
      </footer>
    </>
  );
});

export default CommonLayout;
