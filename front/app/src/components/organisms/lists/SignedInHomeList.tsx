import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link } from "react-router-dom";

interface SignedInHomeListProps {
  handleCloseNav: () => void;
  currentUserId: number;
  currentUserImage: string;
}

const SignedInHomeList = ({
  handleCloseNav,
  currentUserId,
  currentUserImage,
}: SignedInHomeListProps) => {
  return (
    <>
      <MenuItem onClick={handleCloseNav} component={Link} to="/home">
        <Avatar alt="avatar" src={currentUserImage} />
        <Typography>プロフィール</Typography>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleCloseNav}
        component={Link}
        to={`user/${currentUserId}`}
      >
        <DynamicFeedIcon />
        <Typography style={{ padding: "0 1rem" }}>My投稿</Typography>
      </MenuItem>
    </>
  );
};

export default SignedInHomeList;
