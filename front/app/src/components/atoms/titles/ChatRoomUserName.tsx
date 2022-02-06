import React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  name: {
    marginTop: "0.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
}));

interface ChatRoomUserNameProps {
  children: React.ReactNode;
}

const ChatRoomUserName = ({ children }: ChatRoomUserNameProps) => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      component="h6"
      gutterBottom
      className={classes.name}
    >
      {children}
    </Typography>
  );
};

export default ChatRoomUserName;
