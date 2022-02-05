import React, { useState, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";

const PersonNav = () => {
  const { currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element)
  >(null);
  const handleOpenNav = (e) => {
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
          to={`user/${currentUser.id}`}
        >
          <Typography>My投稿</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default PersonNav;
