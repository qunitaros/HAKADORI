import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { AuthContext } from "../../../App";
import SignedInHomeList from "../lists/SignedInHomeList";
import SignedOutHomeList from "../lists/SignedOutHomeList";

const HomeNav = React.memo(() => {
  const { currentUser, isSignedIn } = useContext(AuthContext);

  const [currentUserId, setCurrentUserId] = useState<number | undefined>(
    undefined
  );
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element)
  >(null);
  const handleOpenNav = (e: {
    currentTarget: React.SetStateAction<
      Element | ((element: Element) => Element)
    >;
  }) => {
    setCurrentUserId(currentUser.id);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenNav} color="inherit">
        {isSignedIn ? (
          <PersonIcon style={{ color: "black" }} />
        ) : (
          <ExitToAppIcon style={{ color: "black" }} />
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseNav}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isSignedIn ? (
          <SignedInHomeList
            handleCloseNav={() => handleCloseNav}
            currentUserId={currentUserId}
          />
        ) : (
          <SignedOutHomeList handleCloseNav={() => handleCloseNav} />
        )}
      </Menu>
    </Box>
  );
});

export default HomeNav;
