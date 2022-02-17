import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";

const StyledHeader = styled(CardHeader)(() => ({
  textAlign: "center",
}));

interface AuthttleProps {
  title: string;
}

const Authttl = React.memo(({ title }: AuthttleProps) => {
  return <StyledHeader title={title} />;
});
export default Authttl;
