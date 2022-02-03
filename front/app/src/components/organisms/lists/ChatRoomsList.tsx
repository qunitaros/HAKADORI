import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Theme, makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 340,
    maxWidth: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

interface ChatRoomListProps {
  chatRoomId: number;
  userName: string;
  children: React.ReactNode;
  userId: number;
  imageUrl: string;
}

const ChatRoomsList = ({
  chatRoomId,
  userName,
  children,
  userId,
  imageUrl,
}: ChatRoomListProps) => {
  const classes = useStyles();

  return (
    <List>
      {/* 個別のチャットルームに飛ばす */}
      <Link to={`/chat_room/${chatRoomId}`} className={classes.link}>
        <span className={classes.root}>
          <ListItem alignItems="flex-start" style={{ padding: 0 }}>
            <ListItemAvatar>
              <SmallAvatar id={userId} imageUrl={imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={userName}
              secondary={
                <span style={{ marginTop: "0.5rem" }}>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                  >
                    {children}
                  </Typography>
                </span>
              }
            />
          </ListItem>
        </span>
      </Link>
      <Divider component="li" />
    </List>
  );
};

export default ChatRoomsList;
