import React from "react";

import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import DialogHeader from "../../layouts/DialogHeader";

interface ActiveLikeUsersDialogProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ActiveLikeUsersDialog = React.memo(
  ({ children, open, onClose }: ActiveLikeUsersDialogProps) => {
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <DialogHeader onClose={onClose} title="自分からいいねしたユーザー" />
        <List>{children}</List>
      </Dialog>
    );
  }
);

export default ActiveLikeUsersDialog;
