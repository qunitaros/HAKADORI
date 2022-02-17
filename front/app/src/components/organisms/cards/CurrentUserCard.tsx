import React, { useContext } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LargeAvatar from "../../atoms/avatars/LargeAvatar";
import SettingIcon from "../../atoms/icons/SettingIcon";
import SignOutButton from "../../atoms/buttons/SignOutButton";
import { HomeContext } from "../../pages/Home";
import UserProfileContent from "../../atoms/contents/UserProfileContent";
import UserProfileName from "../../atoms/titles/UserProfileName";

const StyledCard = styled(Card)(() => ({
  width: "50%",
  maxWidth: "460px",
  minWidth: "200px",
}));

const CurrentUserProps = React.memo(() => {
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
    <StyledCard>
      <CardContent>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <SettingIcon onClick={() => setEditFormOpen(true)} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <LargeAvatar imageUrl={currentUser?.image.url} />
        </Grid>
        <UserProfileName>{currentUser?.name}</UserProfileName>
        <UserProfileContent
          age={currentUserAge()}
          prefecture={currentUserPrefecture()}
          field={currentUserField()}
          dayOff={currentUserDayOff()}
          profile={currentUser?.profile}
        />
        <SignOutButton onClick={handleSignOut} />
      </CardContent>
    </StyledCard>
  );
});

export default CurrentUserProps;
