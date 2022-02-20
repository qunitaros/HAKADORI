import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/material/styles";

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
}));

interface SettingIconProps {
  onClick: () => void;
}

const SettingIcon = React.memo(({ onClick }: SettingIconProps) => {
  return (
    <StyledIcon size="large" onClick={onClick}>
      <SettingsIcon color="action" fontSize="small" />
      <ArrowRight sx={{ position: "absolute", right: 4, opacity: 0 }} />
    </StyledIcon>
  );
});

export default SettingIcon;
