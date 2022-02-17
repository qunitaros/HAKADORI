import React from "react";

import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "./Header";

const StyledContainer = styled(Container)(() => ({
  paddingTop: "3rem",
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
    </>
  );
});

export default CommonLayout;
