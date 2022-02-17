import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";
import SmallAvatar from "../../atoms/avatars/SmallAvatar";

const StyledRoot = styled("span")(() => ({
  root: {
    flexGrow: 1,
    minWidth: 340,
    maxWidth: "100%",
  },
}));

interface ChatRoomListProps {
  chatRoomId: number;
  userName: string;
  children: React.ReactNode;
  userId: number;
  imageUrl: string;
}

const ChatRoomsList = React.memo(
  ({ chatRoomId, userName, children, userId, imageUrl }: ChatRoomListProps) => {
    return (
      <List>
        {/* 個別のチャットルームに飛ばす */}
        <Link
          to={`/chat_room/${chatRoomId}`}
          style={{ flexGrow: 1, minWidth: 340, maxWidth: "100%" }}
        >
          <StyledRoot>
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
          </StyledRoot>
        </Link>
        <Divider component="li" />
      </List>
    );
  }
);

export default ChatRoomsList;
