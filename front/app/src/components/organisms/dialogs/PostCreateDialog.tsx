import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";

import PostFormControl from "../../atoms/forms/PostFormControl";
import { fields } from "../../../data/fields";
import PostTextField from "../../atoms/forms/PostTextField";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import { PostCreateContext } from "../../layouts/BottomBar";
import DialogHeader from "../../layouts/DialogHeader";
import PhotoCameraIcon from "../../atoms/icons/PhotoCameraIcon";
import PreviewCancelIcon from "../../atoms/icons/PreviewCancelIcon";

const PostCreateDialog = React.memo(() => {
  const {
    createPostFormOpen,
    setCreatePostFormOpen,
    postField,
    setPostField,
    content,
    setContent,
    handleSubmit,
    setPostPreview,
    postPreview,
    uploadPostImage,
    previewPostImage,
    setPostImage,
  } = useContext(PostCreateContext);

  return (
    <form noValidate autoComplete="off">
      <Dialog
        open={createPostFormOpen}
        keepMounted
        onClose={() => {
          setCreatePostFormOpen(false);
          setPostPreview("");
          setPostImage("");
        }}
        fullWidth
      >
        <DialogHeader
          onClose={() => setCreatePostFormOpen(false)}
          title="新しい投稿"
        />
        <DialogContent>
          <PostFormControl
            value={`${postField}`}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setPostField(e.target.value as number)
            }
            label="勉強している分野"
          >
            {fields.map((field: string, index: number) => (
              <MenuItem key={index} value={index}>
                {field}
              </MenuItem>
            ))}
          </PostFormControl>
          <PostTextField
            label="勉強したことや教わりたいこと"
            placeholder="140文字以内で書いてください"
            value={content}
            rows={4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setContent(e.target.value);
            }}
          />
          <PhotoCameraIcon
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.files);
              uploadPostImage(e);
              previewPostImage(e);
            }}
          />
          {postPreview ? (
            <PreviewCancelIcon
              onClick={() => {
                setPostPreview("");
                setPostImage("");
              }}
              imageUrl={postPreview}
            />
          ) : null}
        </DialogContent>
        <DialogActions>
          <SubmitButton
            onClick={handleSubmit}
            disabled={!content || !postField ? true : false}
          >
            投稿する
          </SubmitButton>
        </DialogActions>
      </Dialog>
    </form>
  );
});

export default PostCreateDialog;
