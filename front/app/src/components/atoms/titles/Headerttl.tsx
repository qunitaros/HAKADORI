import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface HeaderTitleProps {
  children: React.ReactNode;
}

const Headerttl = React.memo(({ children }: HeaderTitleProps) => {
  return (
    <Typography
      component={Link}
      to="/users"
      variant="h6"
      style={{ marginTop: "0.5rem", marginBottom: "1rem", textAlign: "center" }}
    >
      {children}
    </Typography>
  );
});

export default Headerttl;
