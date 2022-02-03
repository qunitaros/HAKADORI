import React, { useContext } from "react";

import { Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LargeAvatar from "../../atoms/avatars/LargeAvatar";
import SettingIcon from "../../atoms/icons/SettingIcon";
import SignOutButton from "../../atoms/buttons/SignOutButton";
import { HomeContext } from "../../pages/Home";
import UserProfileContent from "../../atoms/contents/UserProfileContent";

const useStyles = makeStyles((theme: Theme) => ({
  userCard: {
    width: "50%",
    maxWidth: "460px",
    minWidth: "200px",
  },
}));

const CurrentUserProps = () => {
  const classes = useStyles();
  const {
    setEditFormOpen,
    currentUserAge,
    currentUserPrefecture,
    currentUserField,
    currentUserDayOff,
    handleSignOut,
    currentUser,
  } = useContext(HomeContext);

  return (
    <Card className={classes.userCard}>
      <CardContent>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <SettingIcon onClick={() => setEditFormOpen(true)} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <LargeAvatar imageUrl={currentUser?.image.url} />
        </Grid>
        <UserProfileContent
          name={currentUser?.name}
          age={currentUserAge()}
          prefecture={currentUserPrefecture()}
          field={currentUserField()}
          dayOff={currentUserDayOff()}
          profile={currentUser?.profile}
        />
        <SignOutButton onClick={() => handleSignOut} />
      </CardContent>
    </Card>
  );
};

export default CurrentUserProps;
