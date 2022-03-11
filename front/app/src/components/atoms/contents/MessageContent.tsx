import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface MessageContentProps {
  children: React.ReactNode;
  messageUserId: number;
  otherUserId: number;
}
const MessageContent = React.memo(
  ({ children, messageUserId, otherUserId }: MessageContentProps) => {
    return (
      <Box
        borderRadius={
          messageUserId === otherUserId
            ? "30px 30px 30px 0px"
            : "30px 30px 0px 30px"
        }
        bgcolor={messageUserId === otherUserId ? "#ffb6c1" : "#ddeeff"}
        color="#000000"
        m={1}
        border={0}
        style={{ padding: "1rem 0.5rem 1rem 1rem" }}
      >
        <Typography variant="body1" component="p">
          {children}
        </Typography>
      </Box>
    );
  }
);

export default MessageContent;
