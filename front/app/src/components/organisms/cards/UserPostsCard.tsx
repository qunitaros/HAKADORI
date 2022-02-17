import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import OpenPostButton from "../../atoms/buttons/OpenPostButton";
import PostsContent from "../../atoms/contents/PostsContent";
import PostField from "../../atoms/contents/PostField";
import PostDeleteButton from "../../atoms/buttons/PostDeleteButton";

const StyledCard = styled(Card)(() => ({
  height: "300px",
  backgroundColor: "#cebc86",
  color: "inhedit",
  opacity: "0.5",
}));

interface PostsCardProps {
  postContent: string;
  onClickOpen: () => void;
  postField: string;
  id: number;
  useable: boolean;
}

const UserPostsCard = React.memo(
  ({ postContent, onClickOpen, postField, id, useable }: PostsCardProps) => {
    return (
      <StyledCard variant="outlined">
        <CardContent>
          <PostField postField={postField} />
          <Divider />
          <PostsContent>{postContent}</PostsContent>
          {!useable ? <PostDeleteButton id={id} /> : <></>}
          <OpenPostButton onClick={onClickOpen}>詳しく見る</OpenPostButton>
        </CardContent>
      </StyledCard>
    );
  }
);

export default UserPostsCard;
