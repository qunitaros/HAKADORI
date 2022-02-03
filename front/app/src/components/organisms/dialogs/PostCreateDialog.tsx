import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";

import { PostsContext } from "../../pages/Posts";
import Dialogttl from "../../atoms/titles/Dialogttl";
import PostFormControl from "../../atoms/forms/PostFormControl";
import { fields } from "../../../data/fields";
import PostTextField from "../../atoms/forms/PostTextField";
import SubmitButton from "../../atoms/buttons/SubmitButton";

const PostContentDialog = () => {
  const {
    createPostFormOpen,
    setCreatePostFormOpen,
    postField,
    setPostField,
    content,
    setContent,
    handleSubmit,
  } = useContext(PostsContext);

  return (
    <form noValidate autoComplete="off">
      <Dialog
        open={createPostFormOpen}
        keepMounted
        onClose={() => setCreatePostFormOpen(false)}
      >
        <Dialogttl>新しい投稿</Dialogttl>
        <DialogContent>
          <PostFormControl
            value={postField}
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
            rows={"4"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setContent(e.target.value);
            }}
          />
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
};

export default PostContentDialog;
