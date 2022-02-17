import React from "react";
import Typography from "@mui/material/Typography";

interface UsersNameProps {
  children: React.ReactNode;
}
const UsersName = React.memo(({ children }: UsersNameProps) => {
  return (
    <Typography component="h6" variant="h6" gutterBottom>
      {children}
    </Typography>
  );
});

export default UsersName;
