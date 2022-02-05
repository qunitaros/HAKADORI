import React, { useEffect, createContext, useContext } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { User as UserData, UserPost } from "../../interfaces";
import { RouteComponentProps } from "react-router-dom";
import useUser from "../../lib/hooks/useUser";
import UserCard from "../organisms/cards/UserCard";
import UserPostsCard from "../organisms/cards/UserPostsCard";
import UserPostDialog from "../organisms/dialogs/UserPostDialog";
import { AuthContext } from "../../App";
import LikeButton from "../atoms/buttons/LikeButton";
import useMatching from "../../lib/hooks/useMatching";

export const UserContext = createContext(
  {} as {
    user: UserData;
    userPosts: UserPost[];
    userPost: UserPost;
    setUserPost: React.Dispatch<React.SetStateAction<UserPost>>;
    postDetailOpen: boolean;
    setPostDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
    postDeleteConfirm: boolean;
    setPostDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
    handleGetUser: any;
    userAge: any;
    userDayOff: any;
    userField: any;
    userPrefecture: any;
    handleDeletePost: any;
  }
);

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
}));

type UserProps = RouteComponentProps<{ id: string }>;

const User: React.FC<UserProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const {
    loading,
    user,
    userPosts,
    userPost,
    setUserPost,
    postDetailOpen,
    setPostDetailOpen,
    handleGetUser,
    userAge,
    userDayOff,
    userField,
    userPrefecture,
    CreatePostField,
    handleDeletePost,
    postDeleteConfirm,
    setPostDeleteConfirm,
  } = useUser(props);

  const { isLikedUser, handleCreateLike, handleGetLikes } = useMatching();

  useEffect(() => {
    handleGetUser();
    handleGetLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userPosts,
        userPost,
        setUserPost,
        postDetailOpen,
        setPostDetailOpen,
        postDeleteConfirm,
        setPostDeleteConfirm,
        handleDeletePost,
        handleGetUser,
        userAge,
        userDayOff,
        userField,
        userPrefecture,
      }}
    >
      {!loading ? (
        <Grid container justifyContent="center">
          <UserCard />
          {currentUser.id !== user.id ? (
            <LikeButton
              variant="outlined"
              onClick={() =>
                isLikedUser(user.id) ? void 0 : handleCreateLike(user)
              }
              startIcon={
                isLikedUser(user.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />
              }
              disabled={isLikedUser(user.id) ? true : false}
            >
              {isLikedUser(user.id) ? "いいね済み" : "いいね"}
            </LikeButton>
          ) : (
            <></>
          )}

          {userPosts?.length > 0 ? (
            <Grid
              container
              justifyContent="center"
              spacing={3}
              className={classes.container}
            >
              {userPosts?.map((userPost: UserPost, index: number) => {
                return (
                  <Grid key={index} item xs={4}>
                    <UserPostsCard
                      postContent={userPost.content}
                      postField={CreatePostField(userPost)}
                      id={userPost.id}
                      onClickOpen={() => {
                        setUserPost(userPost);
                        setPostDetailOpen(true);
                      }}
                      useable={
                        currentUser.id !== userPost.userId ? true : false
                      }
                    />
                    <Grid
                      container
                      justifyContent="center"
                      style={{ marginTop: "0.2rem" }}
                    >
                      <Button
                        size="small"
                        onClick={() => {
                          setUserPost(userPost);
                          setPostDetailOpen(true);
                        }}
                      >
                        詳しく見る
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      ) : (
        <></>
      )}
      <UserPostDialog
        postField={CreatePostField(userPost)}
        postContent={userPost.content}
      />
    </UserContext.Provider>
  );
};

export default User;
