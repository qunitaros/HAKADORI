import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    marginTop: theme.spacing(3),
  },
}));

interface UserProfileContentProps {
  age: string;
  prefecture: string;
  field: string;
  dayOff: string;
  profile: string;
}

const UserProfileContent = ({
  age,
  prefecture,
  field,
  dayOff,
  profile,
}: UserProfileContentProps) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.grid}>
      <Grid item>
        <Typography variant="body1" component="p" gutterBottom>
          {age}歳（{prefecture}) <br />
          勉強中:{field} <br />
          休日:{dayOff}
        </Typography>
        <Divider style={{ marginTop: "0.5rem" }} />
        <Typography
          variant="body2"
          component="p"
          gutterBottom
          style={{ marginTop: "0.5rem", fontWeight: "bold" }}
        >
          自己紹介
        </Typography>
        {profile ? (
          <Typography variant="body2" component="p" color="textSecondary">
            {profile}
          </Typography>
        ) : (
          <Typography variant="body2" component="p" color="textSecondary">
            よろしくお願いします。
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default UserProfileContent;
