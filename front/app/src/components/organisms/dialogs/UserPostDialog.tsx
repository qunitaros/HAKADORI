import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { UserContext } from "../../pages/User";
import PostField from "../../atoms/contents/PostField";
import DialogHeader from "../../layouts/DialogHeader";

interface UserPostDialogProps {
  postField: string;
  postContent: string;
}

const UserPostDialog = React.memo(
  ({ postField, postContent }: UserPostDialogProps) => {
    const { postDetailOpen, setPostDetailOpen } = useContext(UserContext);

    return (
      <Dialog
        open={postDetailOpen}
        keepMounted
        onClose={() => setPostDetailOpen(false)}
      >
        <DialogHeader onClose={() => setPostDetailOpen(false)} title="" />
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
  }
);

export default UserPostDialog;
