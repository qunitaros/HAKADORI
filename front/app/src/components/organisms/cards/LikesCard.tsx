import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";

interface LikesCardProps {
  id: number;
  imageUrl: string;
  userName: string;
}

const LikesCard = ({ id, imageUrl, userName }: LikesCardProps) => {
  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: "#e6e6e6",
        color: "inhedit",
        opacity: "0.8",
      }}
    >
      <SmallAvatar id={id} imageUrl={imageUrl} />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {userName}さんからいいねがありした! <br />
          プロフィールを確認してみましょう!
        </Typography>
      </CardContent>
      <CardActions>
        <OpenUserButton id={id} />
      </CardActions>
    </Card>
  );
};

export default LikesCard;
