import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledName = styled(Typography)(() => ({
  marginTop: "0.5rem",
  marginBottom: "1rem",
  textAlign: "center",
}));

interface ChatRoomUserNameProps {
  children: React.ReactNode;
}

const ChatRoomUserName = React.memo(({ children }: ChatRoomUserNameProps) => {
  return (
    <StyledName variant="body2" gutterBottom>
      {children}
    </StyledName>
  );
});

export default ChatRoomUserName;
