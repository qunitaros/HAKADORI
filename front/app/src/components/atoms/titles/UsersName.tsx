import React from "react";
import Typography from "@mui/material/Typography";

interface UsersNameProps {
  children: React.ReactNode;
}
const UsersName = React.memo(({ children }: UsersNameProps) => {
  return (
    <Typography
      component="h5"
      variant="h5"
      gutterBottom
      style={{ marginTop: "1rem" }}
    >
      {children}
    </Typography>
  );
});

export default UsersName;
