import React from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

interface HeaderIconButtonProps {
  children: React.ReactNode;
  link: string;
}

const HeaderIconButton = ({ children, link }: HeaderIconButtonProps) => {
  return (
    <IconButton
      component={Link}
      to={link}
      edge="start"
      color="inherit"
      style={{ textTransform: "none", marginLeft: 3 }}
    >
      {children}
    </IconButton>
  );
};

export default HeaderIconButton;
