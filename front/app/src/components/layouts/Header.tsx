import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import LinearProgress from "@mui/material/LinearProgress";

import { AuthContext } from "../../App";
import PersonNav from "../atoms/navs/PersonNav";
import HeaderIconButton from "../atoms/icons/HeaderIcons";

const Header: React.FC = React.memo(() => {
  const { loading, isSignedIn } = useContext(AuthContext);

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            <HeaderIconButton link="/users">
              <GroupIcon />
            </HeaderIconButton>
            <HeaderIconButton link="/likes">
              <FavoriteIcon />
            </HeaderIconButton>
            <HeaderIconButton link="/chat_rooms">
              <ChatBubbleIcon />
            </HeaderIconButton>
            <HeaderIconButton link="/posts">
              <SchoolIcon />
            </HeaderIconButton>

            <PersonNav />
          </>
        );
      } else {
        return (
          <>
            <HeaderIconButton link="/signin">
              <ExitToAppIcon />
            </HeaderIconButton>
          </>
        );
      }
    } else {
      return <LinearProgress />;
    }
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ color: "#000456", backgroundColor: "wheat" }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            style={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            マサヒロ（仮）
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  );
});

export default Header;
