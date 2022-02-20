import React from "react";
import Typography from "@mui/material/Typography";

interface UsersInfoProps {
  children: React.ReactNode;
}
const UsersInfo = ({ children }: UsersInfoProps) => {
  return (
    <>
      <Typography
        component="h6"
        variant="body2"
        gutterBottom
        style={{ textAlign: "left" }}
      >
        {children}
      </Typography>
    </>
  );
};

export default UsersInfo;
