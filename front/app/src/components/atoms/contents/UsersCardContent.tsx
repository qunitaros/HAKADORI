import React from "react";
import Grid from "@material-ui/core/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

interface UserCardContent {
  children: React.ReactNode;
}
const UsersCardContent = ({ children }: UserCardContent) => {
  const classes = useStyles();

  return <Grid className={classes.content}>{children}</Grid>;
};

export default UsersCardContent;
