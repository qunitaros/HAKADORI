import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

interface MediumAvatarProps {
  id: number;
  imageUrl: string;
}

const MediumAvatar = ({ id, imageUrl }: MediumAvatarProps) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Link to={`user/${id}`}>
          <StyledAvatar alt="avatar" src={imageUrl} />
        </Link>
      </Grid>
    </Grid>
  );
};
export default MediumAvatar;
