import React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: 14,
  },
}));

interface PostsUserNameContentProps {
  children: React.ReactNode;
}

const PostsUserNameContent = ({ children }: PostsUserNameContentProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {children}
      </Typography>
    </>
  );
};

export default PostsUserNameContent;
