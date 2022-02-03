import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  submitBtn: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
    textTransform: "none",
  },
}));

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const SubmitButton = ({ children, disabled, onClick }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      variant="outlined"
      color="secondary"
      className={classes.submitBtn}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
