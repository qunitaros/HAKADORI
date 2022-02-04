import React from "react";
import Typography from "@material-ui/core/Typography";

interface UsersNameProps {
  children: React.ReactNode;
}
const UsersName = ({ children }: UsersNameProps) => {
  return (
    <Typography component="h6" variant="h6" gutterBottom>
      {children}
    </Typography>
  );
};

export default UsersName;
