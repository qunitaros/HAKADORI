import React from "react";

import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

const StyledFab = styled(Fab)(() => ({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: "100px",
}));

interface BottomBarButtonProps {
  onClick: () => void;
}

const BottomBarButton = React.memo(({ onClick }: BottomBarButtonProps) => {
  return (
    <StyledFab
      color="inherit"
      aria-label="add"
      variant="extended"
      onClick={onClick}
    >
      <AddIcon />
      POST
    </StyledFab>
  );
});

export default BottomBarButton;
