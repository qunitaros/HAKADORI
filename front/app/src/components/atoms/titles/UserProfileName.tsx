import React from "react";
import Typography from "@material-ui/core/Typography";

interface UserProfileNameProps {
  children: React.ReactNode;
}

const UserProfileName = ({ children }: UserProfileNameProps) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  );
};

export default UserProfileName;
