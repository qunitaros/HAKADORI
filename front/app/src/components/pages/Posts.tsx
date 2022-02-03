import React, { useEffect, createContext } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Post } from "../../interfaces";

import AlertMessage from "../utils/AlertMessage";
import usePost from "../../lib/hooks/usePosts";
import PostButton from "../atoms/buttons/PostButton";
import PostsCard from "../organisms/cards/PostsCard";
import PostContentDialog from "../organisms/dialogs/PostContentDialog";
import PostCreateDialog from "../organisms/dialogs/PostCreateDialog";

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

const Posts: React.FC = () => {
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
    alertMessageOpen,
    setAlertMessageOpen,
    setPostDetailOpen,
    createPostFormOpen,
    setCreatePostFormOpen,
    handleGetPosts,
    handleSubmit,
    CreatePostField,
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
            <PostButton onClick={() => setCreatePostFormOpen(true)} />
            <Grid container justifyContent="center" spacing={2}>
              {posts?.map((post: Post, index: number) => {
                return (
                  <Grid key={index} item xs={4}>
                    <PostsCard
                      id={post.userId}
                      imageUrl={post.image.url}
                      userName={post.userName}
                      postContent={post.content}
                      postField={CreatePostField(post)}
                      onClick={() => {
                        setPost(post);
                        setPostDetailOpen(true);
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            投稿されていません。
          </Typography>
        )
      ) : (
        <></>
      )}
      <PostContentDialog>{post.content}</PostContentDialog>
      <PostCreateDialog />
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="投稿に失敗しました。"
      />
    </PostsContext.Provider>
  );
};

export default Posts;
