import React, { useContext } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { PostsContext } from "../../pages/Posts";
import DialogHeader from "../../layouts/DialogHeader";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    marginTop: "1rem",
  },
  content: {
    textAlign: "center",
  },
}));

interface PostContentDialogProps {
  children: React.ReactNode;
}

const PostContentDialog = ({ children }: PostContentDialogProps) => {
  const { postDetailOpen, setPostDetailOpen } = useContext(PostsContext);
  const classes = useStyles();

  return (
    <Dialog
      open={postDetailOpen}
      keepMounted
      onClose={() => setPostDetailOpen(false)}
    >
      <DialogHeader
        title="投稿の詳細"
        onClose={() => setPostDetailOpen(false)}
      />
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item className={classes.grid}>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={classes.content}
            >
              {children}
            </Typography>
            <Divider />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PostContentDialog;
