import React from "react";
import Typography from "@mui/material/Typography";

interface UsersInfoProps {
  children: React.ReactNode;
}
const UsersInfo = ({ children }: UsersInfoProps) => {
  return (
    <Typography component="p" variant="body2" gutterBottom>
      {children}
    </Typography>
  );
};

export default UsersInfo;
