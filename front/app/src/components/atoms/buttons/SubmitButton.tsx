import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  flexGrow: 1,
  textTransform: "none",
  width: 200,
}));

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: any;
}

const SubmitButton = React.memo(
  ({ children, disabled, onClick }: SubmitButtonProps) => {
    return (
      <>
        <StyledButton
          type="submit"
          variant="outlined"
          color="primary"
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </StyledButton>
      </>
    );
  }
);

export default SubmitButton;
