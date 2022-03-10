import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { AuthContext } from "../../../App";
import SignedInHomeList from "../lists/SignedInHomeList";
import SignedOutHomeList from "../lists/SignedOutHomeList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HomeNav = React.memo(() => {
  const { currentUser, isSignedIn, guestLogin, setGuestUser } =
    useContext(AuthContext);

  const [currentUserId, setCurrentUserId] = useState<number | undefined>(
    undefined
  );
  const [currentUserImage, setCurrentUserImage] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element)
  >(null);
  const handleOpenNav = (e: {
    currentTarget: React.SetStateAction<
      Element | ((element: Element) => Element)
    >;
  }) => {
    setCurrentUserId(isSignedIn ? currentUser.id : undefined);
    setCurrentUserImage(isSignedIn ? currentUser.image.url : "");
    setAnchorEl(e.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenNav} color="inherit">
        {isSignedIn ? (
          <PersonIcon style={{ color: "black" }} />
        ) : (
          <Box
            color="inherit"
            component="span"
            sx={{
              display: "flex",
              borderRadius: "10px",
              height: "2rem",
              width: "8rem",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "0.4s",
              ":hover": {
                letterSpacing: "3px",
              },
            }}
          >
            START
            <KeyboardArrowDownIcon />
          </Box>
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
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
            handleCloseNav={() => setAnchorEl(null)}
            currentUserId={currentUserId}
            currentUserImage={currentUserImage}
          />
        ) : (
          <SignedOutHomeList
            handleCloseNav={() => setAnchorEl(null)}
            guestLogin={() => {
              setAnchorEl(null);
              setGuestUser(true);
              guestLogin();
            }}
          />
        )}
      </Menu>
    </Box>
  );
});

export default HomeNav;
