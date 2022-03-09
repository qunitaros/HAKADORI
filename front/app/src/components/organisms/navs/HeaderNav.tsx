import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

import DialogHeader from "../../layouts/DialogHeader";
import HeaderIcon from "../../atoms/icons/HeaderIcons";

const HeaderNav = React.memo(() => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e &&
        e.type === "keydown" &&
        ((e as React.KeyboardEvent).key === "Tab" ||
          (e as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenNav(open);
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DialogHeader onClose={() => setOpenNav(false)} title="" />
      <List>
        <Link to="/users" style={{ textDecoration: "none", width: "100%" }}>
          <HeaderIcon link="/users" text="相手を探す">
            <GroupAddIcon />
          </HeaderIcon>
        </Link>
        <Link to="/likes" style={{ textDecoration: "none", width: "100%" }}>
          <HeaderIcon link="/likes" text="いいね">
            <FavoriteIcon />
          </HeaderIcon>
        </Link>
        <Link
          to="/chat_rooms"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <HeaderIcon link="/chat_rooms" text="チャットルーム">
            <QuestionAnswerIcon />
          </HeaderIcon>
        </Link>
        <Link to="/posts" style={{ textDecoration: "none", width: "100%" }}>
          <HeaderIcon link="/posts" text="タイムライン">
            <SchoolIcon />
          </HeaderIcon>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer(true)}
          style={{ marginRight: "1rem" }}
        >
          <MenuIcon style={{ color: "black" }} />
        </IconButton>
        <SwipeableDrawer
          anchor="top"
          open={openNav}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
});

export default HeaderNav;
