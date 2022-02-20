import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

interface DialogHeaderProps {
  onClose: () => void;
  title: string;
}

const DialogHeader = React.memo(({ onClose, title }: DialogHeaderProps) => {
  return (
    <AppBar
      position="relative"
      style={{ color: "#000456", backgroundColor: "wheat" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          style={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          {title}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});

export default DialogHeader;
