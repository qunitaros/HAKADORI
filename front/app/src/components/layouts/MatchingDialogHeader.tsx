import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const MatchingDialogHeader = () => {
  return (
    <AppBar position="relative" style={{ backgroundColor: "#eee" }}>
      <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
        <VolunteerActivismIcon sx={{ color: "red" }} />
        <VolunteerActivismIcon
          sx={{ color: "blue", transform: "scale(-1, 1)" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default MatchingDialogHeader;
