import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import MediumAvatar from "../../atoms/avatars/MediumAvatar";
import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import UsersCardContent from "../../atoms/contents/UsersCardContent";

const StyledCard = styled(Card)(({ theme }) => ({
  height: theme.spacing(30),
  width: theme.spacing(25),
  maxWidth: "300px",
  minWidth: "100px",
}));

interface UsersCardProps {
  id: number;
  imageUrl: string;
  children: React.ReactNode;
}

const UsersCard = React.memo(({ id, imageUrl, children }: UsersCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <MediumAvatar id={id} imageUrl={imageUrl} />
        <Divider style={{ marginTop: "0.8rem" }} />
        <Grid container justifyContent="center">
          <UsersCardContent>{children}</UsersCardContent>
        </Grid>
        <Grid container justifyContent="center">
          <OpenUserButton id={id} />
        </Grid>
      </CardContent>
    </StyledCard>
  );
});

export default UsersCard;
