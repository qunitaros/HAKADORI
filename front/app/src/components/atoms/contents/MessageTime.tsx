import React from "react";
import Typography from "@material-ui/core/Typography";

interface MessageTimeProps {
  messageUserId: number;
  otherUserId: number;
  children: React.ReactNode;
}

const MessageTime = ({
  messageUserId,
  otherUserId,
  children,
}: MessageTimeProps) => {
  return (
    <Typography
      variant="body2"
      component="p"
      color="textSecondary"
      style={{
        textAlign: messageUserId === otherUserId ? "left" : "right",
      }}
    >
      {children}
    </Typography>
  );
};

export default MessageTime;
