import React from "react";
import Typography from "@material-ui/core/Typography";

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
