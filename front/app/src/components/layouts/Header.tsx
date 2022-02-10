import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SchoolIcon from "@material-ui/icons/School";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GroupIcon from "@material-ui/icons/Group";
import LinearProgress from "@material-ui/core/LinearProgress";

import { AuthContext } from "../../App";
import PersonNav from "../atoms/navs/PersonNav";
import HeaderIconButton from "../atoms/icons/HeaderIcons";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit",
  },
}));

const Header: React.FC = () => {
  const { loading, isSignedIn } = useContext(AuthContext);
  const classes = useStyles();

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
            className={classes.title}
          >
            マサヒロ（仮）
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
