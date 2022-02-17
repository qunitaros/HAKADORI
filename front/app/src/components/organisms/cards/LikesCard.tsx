import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";

import OpenUserButton from "../../atoms/buttons/OpenUserButton";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#e6e6e6",
  color: "inhedit",
  opacity: "0.8",
  height: "220px",
}));

interface LikesCardProps {
  id: number;
  imageUrl: string;
  children: React.ReactNode;
}

const LikesCard = React.memo(({ id, imageUrl, children }: LikesCardProps) => {
  return (
    <StyledCard variant="outlined">
      <SmallAvatar id={id} imageUrl={imageUrl} />
      <Divider />
      <CardContent>{children}</CardContent>
      <CardActions>
        <OpenUserButton id={id} />
      </CardActions>
    </StyledCard>
  );
});

export default LikesCard;
