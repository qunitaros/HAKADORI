import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogHeader from "../../layouts/DialogHeader";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DangerousIcon from "@mui/icons-material/Dangerous";
import SignOutButton from "../../atoms/buttons/SignOutButton";

interface GuestDialogProps {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
}

const GuestDialog = ({ open, onClose, onClick }: GuestDialogProps) => {
  return (
    <>
      <Dialog open={open} keepMounted onClose={onClose}>
        <DialogHeader onClose={onClose} title="" />
        <DialogContent>
          <Grid container justifyContent="center">
            <Grid item display="flex">
              <DangerousIcon sx={{ color: "red" }} />
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{ color: "red", marginLeft: "1rem" }}
              >
                ゲストユーザーではこの機能は使えません。
              </Typography>
            </Grid>
            <Grid item sx={{ marginTop: "2rem" }}>
              <SignOutButton onClick={onClick}>
                ゲストユーザーをログアウトして新しくログインする
              </SignOutButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuestDialog;
