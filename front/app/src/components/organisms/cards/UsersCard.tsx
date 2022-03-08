import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import MediumAvatar from "../../atoms/avatars/MediumAvatar";
import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import UsersCardContent from "../../atoms/contents/UsersCardContent";
import UsersInfo from "../../atoms/contents/UsersInfo";
import UsersName from "../../atoms/titles/UsersName";
import BoyIcon from "@mui/icons-material/Boy";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import UsersProfile from "../../atoms/contents/UsersProfile";

const StyledCard = styled(Card)(() => ({
  width: "84%",
  marginBottom: "1rem",
  backgroundColor: "#f5f5f5",
  ":hover": {
    boxShadow: "1px 1px 12px rgba(0,0,0,.65)",
    backgroundColor: "#f9f9f9",
  },
}));

interface UsersCardProps {
  id: number;
  imageUrl: string;
  userName: string;
  userAge: number | void;
  userPrefecture: string;
  userField: string;
  userProfile: string;
}

const UsersCard = React.memo(
  ({
    id,
    imageUrl,
    userAge,
    userPrefecture,
    userField,
    userName,
    userProfile,
  }: UsersCardProps) => {
    return (
      <StyledCard>
        <CardContent>
          <Grid container justifyContent="center">
            <MediumAvatar id={id} imageUrl={imageUrl} />
            <UsersName>{userName}</UsersName>
          </Grid>
          <Grid style={{ marginLeft: "1rem" }}>
            <Divider style={{ marginTop: "0.8rem" }} textAlign="left">
              <BorderColorIcon />
            </Divider>
            <UsersCardContent>
              <UsersInfo>
                {userAge}歳 ({userPrefecture})
              </UsersInfo>
              <UsersInfo>科目: {userField}</UsersInfo>
              <Divider style={{ marginTop: "1.5rem" }} textAlign="left">
                <BoyIcon />
              </Divider>
              <UsersProfile>{userProfile}</UsersProfile>
            </UsersCardContent>
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
            <OpenUserButton id={id} />
          </Grid>
        </CardContent>
      </StyledCard>
    );
  }
);

export default UsersCard;
