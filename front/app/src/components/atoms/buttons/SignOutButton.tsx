import React from "react";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

interface SignOutButtonProps {
  onClick: () => void;
}
const SignOutButton = React.memo(({ onClick }: SignOutButtonProps) => {
  return (
    <StyledButton
      variant="outlined"
      onClick={onClick}
      color="secondary"
      fullWidth
      startIcon={<ExitToAppIcon />}
    >
      サインアウト
    </StyledButton>
  );
});

export default SignOutButton;
