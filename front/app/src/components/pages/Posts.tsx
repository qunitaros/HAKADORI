import React, { useEffect, createContext } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { Post } from "../../interfaces";

import usePost from "../../lib/hooks/usePosts";
import PostsCard from "../organisms/cards/PostsCard";

export const PostsContext = createContext(
  {} as {
    post: Post;
    setPost: React.Dispatch<React.SetStateAction<Post>>;
    posts: Post[];
    postDetailOpen: boolean;
    postField: number;
    setPostField: React.Dispatch<React.SetStateAction<number>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    setPostDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
    createPostFormOpen: boolean;
    setCreatePostFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: any;
    CreatePostField: any;
  }
);

const Posts: React.FC = React.memo(() => {
  const {
    post,
    setPost,
    posts,
    loading,
    postDetailOpen,
    postField,
    setPostField,
    content,
    setContent,
    setPostDetailOpen,
    createPostFormOpen,
    setCreatePostFormOpen,
    handleGetPosts,
    handleSubmit,
    CreatePostField,
    iso8601ToDateTime,
  } = usePost();

  useEffect(() => {
    handleGetPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostsContext.Provider
      value={{
        post,
        setPost,
        posts,
        postDetailOpen,
        postField,
        setPostField,
        content,
        setContent,
        setPostDetailOpen,
        createPostFormOpen,
        setCreatePostFormOpen,
        handleSubmit,
        CreatePostField,
      }}
    >
      {!loading ? (
        posts?.length > 0 ? (
          <>
            <Grid container justifyContent="center">
              {posts?.map((post: Post, index: number) => {
                return (
                  <Grid key={index} container justifyContent="center">
                    <PostsCard
                      id={post.post.userId}
                      imageUrl={post.user.image.url}
                      userName={post.user.name}
                      postContent={post.post.content}
                      postField={CreatePostField(post.post)}
                      postImage={post.post.postImage.url}
                      postCreatedAt={iso8601ToDateTime(
                        post.post.createdAt?.toString() || "100000000"
                      )}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          <Grid
            container
            style={{ flexFlow: "column", alignItems: "center" }}
            justifyContent="center"
          >
            <Typography
              component="h6"
              variant="body1"
              color="textSecondary"
              style={{ marginBottom: "30px" }}
            >
              投稿されていません。
            </Typography>
          </Grid>
        )
      ) : (
        <CircularProgress color="inherit" />
      )}
    </PostsContext.Provider>
  );
});

export default Posts;
