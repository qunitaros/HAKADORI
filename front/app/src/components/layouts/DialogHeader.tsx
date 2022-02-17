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
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default DialogHeader;
