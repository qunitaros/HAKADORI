import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledText = styled(Typography)(() => ({
  color: "gray",
  opacity: "97%",
  textAlign: "left",
  marginTop: "1.3rem",
}));

interface UsersProfileProps {
  children: React.ReactNode;
}

const UsersProfile = ({ children }: UsersProfileProps) => {
  return (
    <StyledText variant="body2" gutterBottom>
      {children}
    </StyledText>
  );
};

export default UsersProfile;
