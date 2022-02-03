import React from "react";
import Button from "@material-ui/core/Button";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginBottom: 30,
    width: "30%",
  },
}));

interface PostButtonProps {
  onClick: () => void;
}

const PostButton = ({ onClick }: PostButtonProps) => {
  const classes = useStyles();

  return (
    <Button variant="contained" onClick={onClick} className={classes.button}>
      新しく投稿する
    </Button>
  );
};

export default PostButton;
