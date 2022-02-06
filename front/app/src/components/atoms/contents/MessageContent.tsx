import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface MessageContentProps {
  children: React.ReactNode;
  messageUserId: number;
  otherUserId: number;
}
const MessageContent = ({
  children,
  messageUserId,
  otherUserId,
}: MessageContentProps) => {
  return (
    <Box
      borderRadius={
        messageUserId === otherUserId
          ? "30px 30px 30px 0px"
          : "30px 30px 0px 30px"
      }
      bgcolor={messageUserId === otherUserId ? "#000000" : "#ffb6c1"}
      color={messageUserId === otherUserId ? "#000000" : "#ffffff"}
      m={1}
      border={10}
      style={{ padding: "1rem 0.5rem 1rem 1rem" }}
    >
      <Typography variant="body1" component="p">
        {children}
      </Typography>
    </Box>
  );
};

export default MessageContent;
