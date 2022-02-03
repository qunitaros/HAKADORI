import React from "react";
import Button from "@material-ui/core/Button";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginLeft: theme.spacing(3),
  },
}));

interface MessageButtonProps {
  disabled: boolean;
  onClick: () => void;
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
    ></Button>
  );
};

export default MessageButton;
