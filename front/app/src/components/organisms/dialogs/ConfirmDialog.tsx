import React from "react";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
  clickYes: () => void;
  clickNo: () => void;
}

const ConfirmDialog = ({
  open,
  onClose,
  message,
  clickYes,
  clickNo,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      aria-labelledby="common-dialog-title"
      aria-describedby="common-dialog-description"
    >
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <IconButton onClick={clickYes} color="error">
          <CheckCircleIcon />
        </IconButton>
        <IconButton onClick={clickNo} color="primary">
          <CancelIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
