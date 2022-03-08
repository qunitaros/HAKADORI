import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";
import PostDeleteIcon from "../../atoms/icons/PostDeleteIcon";

const StyledCard = styled(Card)((theme) => ({
  marginTop: "1rem",
  width: "80%",
  backgroundColor: "#f5f5f5",
  ":hover": {
    boxShadow: "1px 1px 12px rgba(0,0,0,.65)",
    backgroundColor: "#f9f9f9",
  },
}));

interface PostsCardProps {
  id: number;
  userName: string;
  imageUrl: string;
  postField: string;
  postContent: string;
  postImage: string;
  postCreatedAt: Date | string | undefined;
  useable?: boolean;
  deleteAction?: any;
}

const PostsCard = React.memo(
  ({
    id,
    userName,
    imageUrl,
    postField,
    postContent,
    postImage,
    postCreatedAt,
    useable,
    deleteAction,
  }: PostsCardProps) => {
    return (
      <StyledCard variant="outlined">
        <CardHeader
          avatar={<SmallAvatar id={id} imageUrl={imageUrl} />}
          title={postField}
          subheader={userName}
          action={
            useable ? (
              <CardActions>
                <PostDeleteIcon onClick={deleteAction} />
              </CardActions>
            ) : (
              <></>
            )
          }
        />
        {postImage ? (
          <CardMedia component="img" image={postImage} alt={postImage} />
        ) : (
          <></>
        )}
        <Divider />
        <Grid
          container
          style={{ margin: "1rem auto auto 0.5rem", width: "92%" }}
        >
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {postContent}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: "1rem" }}
            >
              {postCreatedAt}
            </Typography>
          </CardContent>
        </Grid>
      </StyledCard>
    );
  }
);

export default PostsCard;
