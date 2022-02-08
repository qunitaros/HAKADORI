import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { UserContext } from "../../pages/User";
import PostField from "../../atoms/contents/PostField";

interface UserPostDialogProps {
  postField: string;
  postContent: string;
}

const UserPostDialog = ({ postField, postContent }: UserPostDialogProps) => {
  const { postDetailOpen, setPostDetailOpen } = useContext(UserContext);

  return (
    <Dialog
      open={postDetailOpen}
      keepMounted
      onClose={() => setPostDetailOpen(false)}
    >
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "1rem" }}>
            <PostField postField={postField} />
            <Divider />
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              {postContent}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default UserPostDialog;
