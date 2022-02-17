import React from "react";

import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(16),
  height: theme.spacing(16),
}));

interface LargeAvatarProps {
  imageUrl: string;
}

const LargeAvatar = ({ imageUrl }: LargeAvatarProps) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <StyledAvatar alt="avatar" src={imageUrl} />
      </Grid>
    </Grid>
  );
};
export default LargeAvatar;
