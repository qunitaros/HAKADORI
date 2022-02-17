import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";

const PersonNav = React.memo(() => {
  const { currentUser } = useContext(AuthContext);

  const [currentUserId, setCurrentUserId] = useState<number | undefined>(
    undefined
  );
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element)
  >(null);
  const handleOpenNav = (e) => {
    setCurrentUserId(currentUser.id);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenNav} color="inherit">
        <PersonIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseNav}
      >
        <MenuItem onClick={handleCloseNav} component={Link} to="/home">
          <Typography>プロフィール</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleCloseNav}
          component={Link}
          to={`user/${currentUserId}`}
        >
          <Typography>My投稿</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
});

export default PersonNav;
