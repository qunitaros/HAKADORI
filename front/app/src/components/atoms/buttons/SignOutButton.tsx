import React from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface SignOutButtonProps {
  onClick: () => void;
}
const SignOutButton = ({ onClick }: SignOutButtonProps) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      color="secondary"
      fullWidth
      startIcon={<ExitToAppIcon />}
      style={{ marginTop: "1rem" }}
    >
      サインアウト
    </Button>
  );
};

export default SignOutButton;
