import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

const StyledTitle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface UserProfileNameProps {
  userName: string;
  userGender: number;
}

const UserProfileName = React.memo(
  ({ userName, userGender }: UserProfileNameProps) => {
    return (
      <StyledTitle
        container
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Typography variant="h4">{userName}</Typography>
        {userGender === 0 ? (
          <ManIcon sx={{ color: "#1e90ff" }} />
        ) : (
          <WomanIcon sx={{ color: "#fe7f9c" }} />
        )}
      </StyledTitle>
    );
  }
);

export default UserProfileName;
