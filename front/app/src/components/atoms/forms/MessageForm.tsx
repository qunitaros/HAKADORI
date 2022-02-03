import React from "react";
import TextField from "@material-ui/core/TextField";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  textInputWrapper: {
    width: "100%",
  },
}));

interface MessageFormProps {
  value: string;
  onChange: () => void;
  className: string;
}

const MessageForm = ({ value, onChange, className }: MessageFormProps) => {
  const classes = useStyles();

  return (
    <TextField
      required
      multiline
      value={value}
      onChange={onChange}
      className={classes.textInputWrapper}
    />
  );
};

export default MessageForm;
