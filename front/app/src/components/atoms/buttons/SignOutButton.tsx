import React from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: theme.spacing(4),
  },
}));

interface SignOutButtonProps {
  onClick: () => void;
}
const SignOutButton = ({ onClick }: SignOutButtonProps) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      color="secondary"
      fullWidth
      startIcon={<ExitToAppIcon />}
      className={classes.button}
    >
      サインアウト
    </Button>
  );
};

export default SignOutButton;
