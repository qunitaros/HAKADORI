import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(() => ({
  marginBottom: "1.5rem",
}));

const StyledPreview = styled("img")(() => ({
  width: "100%",
}));

interface CancelIconProps {
  imageUrl: string | null;
  onClick: any;
}

const PreviewCancelIcon = React.memo(
  ({ imageUrl, onClick }: CancelIconProps) => {
    return (
      <StyledBox>
        <IconButton color="inherit" onClick={onClick}>
          <CancelIcon />
        </IconButton>
        <StyledPreview src={imageUrl} alt="preview img" />
      </StyledBox>
    );
  }
);

export default PreviewCancelIcon;
