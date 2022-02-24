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
      sx={{
        color: "#000456",
        backgroundColor: "#eee",
        boxShadow:
          "3px 3px 6px -2px #555 3px 3px 8px rgba(255,255,255,0.8) inset",
      }}
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
