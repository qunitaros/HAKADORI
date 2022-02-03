import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";

interface SettingIconProps {
  onClick: () => void;
}

const SettingIcon = ({ onClick }: SettingIconProps) => {
  return (
    <IconButton onClick={onClick}>
      <SettingsIcon color="action" fontSize="small" />
    </IconButton>
  );
};

export default SettingIcon;
