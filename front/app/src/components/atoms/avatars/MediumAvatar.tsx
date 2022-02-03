import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

interface MediumAvatarProps {
  id: number;
  imageUrl: string;
}

const MediumAvatar = ({ id, imageUrl }: MediumAvatarProps) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Link to={`user/${id}`}>
          <Avatar alt="avatar" src={imageUrl} className={classes.avatar} />
        </Link>
      </Grid>
    </Grid>
  );
};
export default MediumAvatar;
