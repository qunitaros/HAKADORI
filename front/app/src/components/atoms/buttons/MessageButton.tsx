import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
}));

interface MessageButtonProps {
  disabled: boolean;
  onClick: any;
}

const MessageButton = React.memo(
  ({ disabled, onClick }: MessageButtonProps) => {
    return (
      <StyledButton
        variant="contained"
        color="primary"
        disabled={disabled}
        onClick={onClick}
      >
        <SendIcon />
      </StyledButton>
    );
  }
);

export default MessageButton;
