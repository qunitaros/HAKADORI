import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
}));

interface MessageFormProps {
  value: string;
  onChange: any;
}

const MessageForm = React.memo(({ value, onChange }: MessageFormProps) => {
  return (
    <StyledTextField required multiline value={value} onChange={onChange} />
  );
});

export default MessageForm;
