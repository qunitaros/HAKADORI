import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  postContent: {
    marginBottom: 12,
  },
}));

interface PostsContentProps {
  children: React.ReactNode;
}

const PostsContent = ({ children }: PostsContentProps) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" component="h2" className={classes.postContent}>
      {children}
    </Typography>
  );
};

export default PostsContent;
