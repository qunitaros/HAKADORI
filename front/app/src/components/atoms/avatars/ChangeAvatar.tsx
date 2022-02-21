import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const StyledBox = styled(Grid)(() => ({
  margin: "2rem 0",
  justifyContent: "center",
}));

const StyledInput = styled("input")(() => ({
  display: "none",
}));

interface ChangeAvatarProps {
  imageUrl: string;
  onChange: any;
  text: string;
}

const ChangeAvatar = ({ onChange, imageUrl, text }: ChangeAvatarProps) => {
  return (
    <StyledBox>
      <StyledInput
        accept="image/*"
        id="avatar-file"
        type="file"
        onChange={onChange}
      />
      <label
        htmlFor="avatar-file"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledAvatar aria-label="upload avatar" alt="avatar" src={imageUrl} />
        <Button
          style={{ paddingTop: "0.3rem", margin: "0 auto" }}
          color="primary"
          aria-label="upload avatar"
        >
          {text}
        </Button>
      </label>
    </StyledBox>
  );
};

export default ChangeAvatar;
