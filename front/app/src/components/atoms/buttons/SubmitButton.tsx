import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  flexGrow: 1,
  textTransform: "none",
}));

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const SubmitButton = React.memo(
  ({ children, disabled, onClick }: SubmitButtonProps) => {
    return (
      <StyledButton
        type="submit"
        variant="outlined"
        color="secondary"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
);

export default SubmitButton;
