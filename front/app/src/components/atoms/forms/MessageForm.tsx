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
  onChange: any;
}

const MessageForm = ({ value, onChange }: MessageFormProps) => {
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
