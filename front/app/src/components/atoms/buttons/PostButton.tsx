import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  marginBottom: 30,
  width: "30%",
  height: "60px",
}));

interface PostButtonProps {
  onClick: () => void;
}

const PostButton = React.memo(({ onClick }: PostButtonProps) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <StyledButton variant="contained" onClick={onClick}>
        新しく投稿する
      </StyledButton>
    </Grid>
  );
});

export default PostButton;
