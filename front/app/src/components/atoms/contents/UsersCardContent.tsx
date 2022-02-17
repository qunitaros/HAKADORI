import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledContent = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: "center",
}));

interface UserCardContent {
  children: React.ReactNode;
}
const UsersCardContent = React.memo(({ children }: UserCardContent) => {
  return <StyledContent>{children}</StyledContent>;
});

export default UsersCardContent;
