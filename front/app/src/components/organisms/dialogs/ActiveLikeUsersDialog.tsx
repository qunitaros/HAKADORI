import React from "react";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";

import DialogHeader from "../../layouts/DialogHeader";

interface ActiveLikeUsersDialogProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

const ActiveLikeUsersDialog = ({
  children,
  open,
  onClose,
}: ActiveLikeUsersDialogProps) => {
  // const Transition = React.forwardRef(function Transition(
  //   props: TransitionProps & {
  //     children: React.ReactElement;
  //   },
  //   ref: React.Ref<unknown>
  // ) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      // TransitionComponent={Transition}
    >
      <DialogHeader onClose={onClose} title="自分からいいねしたユーザー" />
      <List>{children}</List>
    </Dialog>
  );
};

export default ActiveLikeUsersDialog;
