import React, { useContext, createContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BottomBarButton from "../atoms/buttons/BottomBarButton";
import { AuthContext } from "../../App";
import PostCreateDialog from "../organisms/dialogs/PostCreateDialog";
import AlertMessage from "../utils/AlertMessage";
import usePost from "../../lib/hooks/usePosts";

export const PostCreateContext = createContext(
  {} as {
    createPostFormOpen: boolean;
    setCreatePostFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    alertMessageOpen: boolean;
    setAlertMessageOpen: React.Dispatch<React.SetStateAction<boolean>>;
    postField: number;
    setPostField: React.Dispatch<React.SetStateAction<number>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: any;
  }
);

const BottomBar = React.memo(() => {
  const { isSignedIn } = useContext(AuthContext);
  const {
    createPostFormOpen,
    setCreatePostFormOpen,
    alertMessageOpen,
    setAlertMessageOpen,
    postField,
    setPostField,
    content,
    setContent,
    handleSubmit,
    createSuccessOpen,
    setCreateSuccessOpen,
  } = usePost();

  return (
    <PostCreateContext.Provider
      value={{
        createPostFormOpen,
        setCreatePostFormOpen,
        alertMessageOpen,
        setAlertMessageOpen,
        postField,
        setPostField,
        content,
        setContent,
        handleSubmit,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          color: "#000456",
          backgroundColor: "wheat",
        }}
      >
        {isSignedIn ? (
          <Toolbar>
            <BottomBarButton onClick={() => setCreatePostFormOpen(true)} />
          </Toolbar>
        ) : (
          <></>
        )}
      </AppBar>
      <PostCreateDialog />
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="投稿に失敗しました。"
      />
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={createSuccessOpen}
        setOpen={setCreateSuccessOpen}
        severity="success"
        message="新しく投稿しました。"
      />
    </PostCreateContext.Provider>
  );
});

export default BottomBar;
