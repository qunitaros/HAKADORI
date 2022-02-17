import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { PostsContext } from "../../pages/Posts";
import DialogHeader from "../../layouts/DialogHeader";

const StyledGrid = styled(Grid)(() => ({
  marginTop: "1rem",
}));

const StyledContent = styled(Typography)(() => ({
  textAlign: "center",
}));

interface PostContentDialogProps {
  children: React.ReactNode;
}

const PostContentDialog = React.memo(({ children }: PostContentDialogProps) => {
  const { postDetailOpen, setPostDetailOpen } = useContext(PostsContext);

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
          <StyledGrid item>
            <StyledContent variant="body1" gutterBottom>
              {children}
            </StyledContent>
            <Divider />
          </StyledGrid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
});

export default PostContentDialog;
