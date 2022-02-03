import React from "react";
import Typography from "@material-ui/core/Typography";
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

  return (
    <Typography
      variant="body2"
      component="p"
      gutterBottom
      className={classes.content}
    >
      {children}
    </Typography>
  );
};

export default UsersCardContent;
