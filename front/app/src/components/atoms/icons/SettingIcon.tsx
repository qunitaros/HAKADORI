import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

interface SettingIconProps {
  onClick: () => void;
}

const SettingIcon = React.memo(({ onClick }: SettingIconProps) => {
  return (
    <IconButton onClick={onClick}>
      <SettingsIcon color="action" fontSize="small" />
    </IconButton>
  );
});

export default SettingIcon;
