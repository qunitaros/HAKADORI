import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Theme, makeStyles } from "@material-ui/core/styles";

import MediumAvatar from "../../atoms/avatars/MediumAvatar";
import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import UsersCardContent from "../../atoms/contents/UsersCardContent";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  card: {
    height: theme.spacing(30),
    width: theme.spacing(25),
    maxWidth: "300px",
    minWidth: "100px",
  },
}));

interface UsersCardProps {
  id: number;
  imageUrl: string;
  children: React.ReactNode;
}

const UsersCard = ({ id, imageUrl, children }: UsersCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
    </Card>
  );
};

export default UsersCard;
