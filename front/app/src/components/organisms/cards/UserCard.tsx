import React, { useContext } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LargeAvatar from "../../atoms/avatars/LargeAvatar";
import UserProfileContent from "../../atoms/contents/UserProfileContent";

import { UserContext } from "../../pages/User";
import UserProfileName from "../../atoms/titles/UserProfileName";
import { AuthContext } from "../../../App";

const StyledCard = styled(Card)(() => ({
  width: "84%",
  padding: "1rem",
}));

const UserCard = React.memo(() => {
  const { user, userAge, userDayOff, userField, userPrefecture } =
    useContext(UserContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <StyledCard>
      <CardContent>
        <Grid container justifyContent="center">
          <LargeAvatar imageUrl={user?.image.url} />
        </Grid>
        <UserProfileName>{user?.name}</UserProfileName>
        {user.id !== currentUser.id ? (
          <UserProfileContent
            age={userAge()}
            prefecture={userPrefecture()}
            field={userField()}
            dayOff={userDayOff()}
            profile={user?.profile}
          />
        ) : (
          <></>
        )}
      </CardContent>
    </StyledCard>
  );
});

export default UserCard;
