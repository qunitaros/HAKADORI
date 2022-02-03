import React from "react";

import Avatar from "@material-ui/core/Avatar";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

interface LargeAvatarProps {
  imageUrl: string;
}

const LargeAvatar = ({ imageUrl }: LargeAvatarProps) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Avatar alt="avatar" src={imageUrl} className={classes.avatar} />
      </Grid>
    </Grid>
  );
};
export default LargeAvatar;
