import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
}));

interface PostFieldProps {
  postField: string;
}

const PostField = ({ postField }: PostFieldProps) => {
  const classes = useStyles();

  return <Typography className={classes.field}>{postField}</Typography>;
};
export default PostField;
