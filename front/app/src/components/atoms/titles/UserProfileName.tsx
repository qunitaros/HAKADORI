import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

interface UserProfileNameProps {
  children: React.ReactNode;
}

const UserProfileName = ({ children }: UserProfileNameProps) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.title}>
      <Typography variant="h4" gutterBottom>
        {children}
      </Typography>
    </Grid>
  );
};

export default UserProfileName;
