import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const StyledBox = styled(Grid)(() => ({
  justifyContent: "center",
  maxWidth: "150px",
  margin: "2rem auto",
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
      <label htmlFor="avatar-file">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            margin: "0 auto",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <StyledAvatar
            aria-label="upload avatar"
            alt="avatar"
            src={imageUrl}
          />
          <p
            style={{
              paddingTop: "0.3rem",
              margin: "0 auto",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "blue",
              opacity: "0.7",
            }}
            color="primary"
            aria-label="upload avatar"
          >
            {text}
          </p>
        </div>
      </label>
    </StyledBox>
  );
};

export default ChangeAvatar;
