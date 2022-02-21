import React, { useContext } from "react";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";

interface SignedInHomeListProps {
  handleCloseNav: () => void;
  currentUserId: number;
}

const SignedInHomeList = ({
  handleCloseNav,
  currentUserId,
}: SignedInHomeListProps) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <MenuItem onClick={handleCloseNav} component={Link} to="/home">
        {currentUser.image.url ? (
          <Avatar alt="avatar" src={currentUser.image.url} />
        ) : (
          <Avatar>
            <AccountBoxIcon />
          </Avatar>
        )}

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
