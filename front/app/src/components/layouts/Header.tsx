import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { AuthContext } from "../../App";
import PersonNav from "../atoms/navs/PersonNav";
import CategoryNav from "../atoms/navs/CategoryNav";

const StyledBox = styled(Box)(() => ({
  boxShadow: "3px 3px 6px -2px #555 3px 3px 8px rgba(255,255,255,0.8) inset",
}));

const Header: React.FC = React.memo(() => {
  const { loading, isSignedIn } = useContext(AuthContext);

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            <PersonNav />
          </>
        );
      } else {
        return (
          <>
            <IconButton
              component={Link}
              to="/signin"
              edge="start"
              color="inherit"
              style={{ textTransform: "none" }}
            >
              <ExitToAppIcon />
            </IconButton>
          </>
        );
      }
    } else {
      return <LinearProgress />;
    }
  };

  return (
    <StyledBox>
      <AppBar
        position="static"
        style={{
          color: "#000456",
          backgroundColor: "wheat",
        }}
      >
        <Toolbar>
          {isSignedIn ? <CategoryNav /> : <></>}
          <Typography
            variant="h6"
            style={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            HAKADRI
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
});

export default Header;
