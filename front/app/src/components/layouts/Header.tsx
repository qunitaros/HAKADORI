import React, { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { AuthContext } from "../../App";
import HomeNav from "../organisms/navs/HomeNav";
import HeaderNav from "../organisms/navs/HeaderNav";

const StyledBox = styled(Box)(() => ({
  boxShadow: "3px 3px 6px -2px #555 3px 3px 8px rgba(255,255,255,0.8) inset",
}));

const Header: React.FC = React.memo(() => {
  const { loading, isSignedIn } = useContext(AuthContext);

  return (
    <StyledBox>
      <AppBar
        position="static"
        style={{
          color: "#000456",
          backgroundColor: "wheat",
          boxShadow:
            "3px 3px 6px -2px #555 3px 3px 8px rgba(255,255,255,0.8) inset",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            style={{ flexGrow: 2, textDecoration: "none", color: "inherit" }}
          >
            HAKADRI
          </Typography>
          {!loading ? (
            isSignedIn ? (
              <>
                <HeaderNav />
                <HomeNav />
              </>
            ) : (
              <LinearProgress />
            )
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
});

export default Header;
