import React, { useEffect, createContext, useContext } from "react";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { User as UserData, UserPost } from "../../interfaces";
import { RouteComponentProps } from "react-router-dom";
import useUser from "../../lib/hooks/useUser";
import UserCard from "../organisms/cards/UserCard";
import PostsCard from "../organisms/cards/PostsCard";
import UserPostDialog from "../organisms/dialogs/UserPostDialog";
import { AuthContext } from "../../App";
import LikeButton from "../atoms/buttons/LikeButton";
import useLikes from "../../lib/hooks/useLikes";
import ConfirmDialog from "../organisms/dialogs/ConfirmDialog";

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
    handleGetLikeUsers: any;
  }
);

const StyledContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: "100%",
}));

type UserProps = RouteComponentProps<{ id: string }>;

const User: React.FC<UserProps> = React.memo((props) => {
  const { currentUser } = useContext(AuthContext);
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
    iso8601ToDateTime,
  } = useUser(props);

  const { handleGetLikeUsers, isLikedUser, handleCreateLike } = useLikes();

  useEffect(() => {
    handleGetUser();
    handleGetLikeUsers();

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
        handleGetLikeUsers,
      }}
    >
      {!loading ? (
        <Grid container justifyContent="center">
          <UserCard />
          {currentUser.id !== user.id ? (
            <LikeButton
              variant="contained"
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
            <StyledContainer container justifyContent="center">
              {userPosts?.map((userPost: UserPost, index: number) => {
                return (
                  <Grid key={index} container justifyContent="center">
                    <PostsCard
                      postContent={userPost.content}
                      postField={CreatePostField(userPost)}
                      useable={
                        currentUser.id === userPost.userId ? true : false
                      }
                      deleteAction={() => setPostDeleteConfirm(true)}
                      id={0}
                      userName={user?.name}
                      imageUrl={user.image.url}
                      postCreatedAt={iso8601ToDateTime(
                        userPost.createdAt?.toString() || "100000000"
                      )}
                    />
                    <ConfirmDialog
                      open={postDeleteConfirm}
                      onClose={() => setPostDeleteConfirm(false)}
                      message="投稿を削除します。よろしいですか？"
                      clickYes={() => handleDeletePost(userPost.id)}
                      clickNo={() => setPostDeleteConfirm(false)}
                    />
                  </Grid>
                );
              })}
            </StyledContainer>
          ) : (
            <>
              <br />
              <StyledContainer container justifyContent="center" spacing={3}>
                <Typography component="h6">まだ投稿がありません。</Typography>
              </StyledContainer>
            </>
          )}
        </Grid>
      ) : (
        <CircularProgress color="inherit" />
      )}
      <UserPostDialog
        postField={CreatePostField(userPost)}
        postContent={userPost.content}
      />
    </UserContext.Provider>
  );
});

export default User;
