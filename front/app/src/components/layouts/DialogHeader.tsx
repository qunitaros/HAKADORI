import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

interface DialogHeaderProps {
  onClose: () => void;
  title: string;
}

const DialogHeader = ({ onClose, title }: DialogHeaderProps) => {
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
};

export default DialogHeader;
