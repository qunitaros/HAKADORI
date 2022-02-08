import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginBottom: 30,
    width: "30%",
    height: "60px",
  },
}));

interface PostButtonProps {
  onClick: () => void;
}

const PostButton = ({ onClick }: PostButtonProps) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Button variant="contained" onClick={onClick} className={classes.button}>
        新しく投稿する
      </Button>
    </Grid>
  );
};

export default PostButton;
