import React, { useContext } from "react";

import { Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LargeAvatar from "../../atoms/avatars/LargeAvatar";
import UserProfileContent from "../../atoms/contents/UserProfileContent";

import { UserContext } from "../../pages/User";

const useStyles = makeStyles((theme: Theme) => ({
  userCard: {
    width: "50%",
    maxWidth: "460px",
    minWidth: "200px",
  },
}));

const UserCard = () => {
  const classes = useStyles();
  const { user, userAge, userDayOff, userField, userPrefecture } =
    useContext(UserContext);

  return (
    <Card className={classes.userCard}>
      <CardContent>
        <Grid container justifyContent="center">
          <LargeAvatar imageUrl={user?.image.url} />
        </Grid>
        <UserProfileContent
          name={user?.name}
          age={userAge()}
          prefecture={userPrefecture()}
          field={userField()}
          dayOff={userDayOff()}
          profile={user?.profile}
        />
      </CardContent>
    </Card>
  );
};

export default UserCard;
