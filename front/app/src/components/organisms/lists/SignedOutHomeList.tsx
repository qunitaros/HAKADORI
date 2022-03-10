import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AirlineSeatReclineExtraTwoToneIcon from "@mui/icons-material/AirlineSeatReclineExtraTwoTone";
import { Link } from "react-router-dom";

interface SignedOutHomeListProps {
  handleCloseNav: () => void;
  guestLogin: any;
}

const SignedOutHomeList = ({
  handleCloseNav,
  guestLogin,
}: SignedOutHomeListProps) => {
  return (
    <>
      <MenuItem onClick={handleCloseNav} component={Link} to="/signin">
        <LoginIcon />

        <Typography style={{ marginLeft: "0.5rem" }}>ログイン</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleCloseNav} component={Link} to="/signup">
        <AssignmentIndIcon />
        <Typography style={{ marginLeft: "0.5rem" }}>新規登録</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={guestLogin}>
        <AirlineSeatReclineExtraTwoToneIcon />
        <Typography style={{ marginLeft: "0.5rem" }}>ゲストユーザー</Typography>
      </MenuItem>
    </>
  );
};

export default SignedOutHomeList;
