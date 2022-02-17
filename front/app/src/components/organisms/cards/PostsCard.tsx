import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import SmallAvatar from "../../atoms/avatars/SmallAvatar";
import OpenPostButton from "../../atoms/buttons/OpenPostButton";
import PostField from "../../atoms/contents/PostField";
import PostsContent from "../../atoms/contents/PostsContent";
import PostsUserNameContent from "../../atoms/contents/PostsUserNameContent";

const StyledCard = styled(Card)(() => ({
  height: "300px",
  backgroundColor: "#cebc86",
  color: "inhedit",
  opacity: "0.5",
}));

interface PostsCardProps {
  id: number;
  imageUrl: string;
  userName: string;
  postContent: string;
  onClick: () => void;
  postField: string;
}

const PostsCard = React.memo(
  ({
    id,
    imageUrl,
    userName,
    postContent,
    onClick,
    postField,
  }: PostsCardProps) => {
    return (
      <StyledCard variant="outlined">
        <CardContent>
          <SmallAvatar id={id} imageUrl={imageUrl} />
          <PostsUserNameContent>{userName}</PostsUserNameContent>
          <PostField postField={postField} />
          <Divider />

          <PostsContent>{postContent}</PostsContent>
          <OpenPostButton onClick={onClick}>詳しく見る</OpenPostButton>
        </CardContent>
      </StyledCard>
    );
  }
);

export default PostsCard;
