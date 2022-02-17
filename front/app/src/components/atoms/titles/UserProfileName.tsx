import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface UserProfileNameProps {
  children: React.ReactNode;
}

const UserProfileName = React.memo(({ children }: UserProfileNameProps) => {
  return (
    <StyledTitle container justifyContent="center">
      <Typography variant="h4" gutterBottom>
        {children}
      </Typography>
    </StyledTitle>
  );
});

export default UserProfileName;
