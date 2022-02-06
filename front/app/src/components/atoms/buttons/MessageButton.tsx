import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginLeft: theme.spacing(3),
  },
}));

interface MessageButtonProps {
  disabled: boolean;
  onClick: any;
}

const MessageButton = ({ disabled, onClick }: MessageButtonProps) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      className={classes.button}
    >
      <SendIcon />
    </Button>
  );
};

export default MessageButton;
