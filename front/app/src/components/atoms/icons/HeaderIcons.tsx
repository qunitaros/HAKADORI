import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowRight from "@mui/icons-material/ArrowRight";

const StyledIcon = styled(IconButton)(() => ({
  "& svg": {
    transition: "0.2s",
    transform: "translateX(0) rotate(0)",
  },
  "&:hover, &:focus": {
    bgcolor: "unset",
    "& svg:first-of-type": {
      transform: "translateX(-4px) rotate(-20deg)",
    },
    "& svg:last-of-type": {
      right: 0,
      opacity: 1,
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    height: "80%",
    display: "block",
    left: 0,
    width: "1px",
    bgcolor: "divider",
  },
  width: "100%",
}));

interface HeaderIconButtonProps {
  children: React.ReactNode;
  link: string;
  text: string;
}

const HeaderIcon = ({ children, link, text }: HeaderIconButtonProps) => {
  return (
    <>
      <ListItem button sx={{ width: "100%" }}>
        <Link to={link} style={{ textDecoration: "none" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon>
              <StyledIcon size="large">
                {children}
                <ArrowRight
                  sx={{ position: "absolute", right: 4, opacity: 0 }}
                />
              </StyledIcon>
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: "black" }} />
          </Box>
        </Link>
      </ListItem>
      <Divider />
    </>
  );
};

export default HeaderIcon;
