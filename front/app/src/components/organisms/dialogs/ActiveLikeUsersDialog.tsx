import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";

import { TransitionProps } from "@material-ui/core/transitions";

interface ActiveLikeUsersDialogProps {
  children: React.ReactNode;
}

const ActiveLikeUsersDialog = ({ children }: ActiveLikeUsersDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        自分からいいねした人を見る
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="static"
          style={{ color: "#000456", backgroundColor: "wheat" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              自分からいいねしたユーザー
            </Typography>
          </Toolbar>
        </AppBar>
        <List>{children}</List>
      </Dialog>
    </div>
  );
};

export default ActiveLikeUsersDialog;
