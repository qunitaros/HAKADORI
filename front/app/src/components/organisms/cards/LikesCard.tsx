import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Theme, makeStyles } from "@material-ui/core/styles";

import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    backgroundColor: "#e6e6e6",
    color: "inhedit",
    opacity: "0.8",
    height: "220px",
  },
}));

interface LikesCardProps {
  id: number;
  imageUrl: string;
  children: React.ReactNode;
}

const LikesCard = ({ id, imageUrl, children }: LikesCardProps) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <SmallAvatar id={id} imageUrl={imageUrl} />
      <Divider />
      <CardContent>{children}</CardContent>
      <CardActions>
        <OpenUserButton id={id} />
      </CardActions>
    </Card>
  );
};

export default LikesCard;
