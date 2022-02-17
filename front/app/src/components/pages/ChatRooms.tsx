import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { ChatRoom } from "../../interfaces/index";
import useChatRooms from "../../lib/hooks/useChatRooms";

const StyledRoot = styled("span")(() => ({
  flexGrow: 1,
  minWidth: 340,
  maxWidth: "100%",
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

const StyledChatRoom = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
}));

//チャットルーム一覧ページ
const ChatRooms: React.FC = React.memo(() => {
  const { loading, chatRooms, handleGetChatRooms } = useChatRooms();

  useEffect(() => {
    handleGetChatRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        chatRooms.length > 0 ? (
          chatRooms.map((chatRoom: ChatRoom, index: number) => {
            return (
              <Grid container key={index} justifyContent="center">
                <List style={{ width: "300px" }}>
                  {/* 個別のチャットルームに飛ばす */}
                  <StyledLink to={`/chat_room/${chatRoom.chatRoom.id}`}>
                    <StyledRoot>
                      <StyledChatRoom alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="avatar"
                            src={chatRoom.otherUser.image.url}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={chatRoom.otherUser.name}
                          secondary={
                            <span style={{ marginTop: "0.5rem" }}>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textSecondary"
                              >
                                {chatRoom.lastMessage === null
                                  ? "まだメッセージがありません"
                                  : chatRoom.lastMessage.content.length > 30
                                  ? chatRoom.lastMessage.content.substring(
                                      0,
                                      30
                                    ) + "..."
                                  : chatRoom.lastMessage.content}
                              </Typography>
                            </span>
                          }
                        />
                      </StyledChatRoom>
                    </StyledRoot>
                  </StyledLink>
                  <Divider component="li" />
                </List>
              </Grid>
            );
          })
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            マッチング中の相手はいません。
          </Typography>
        )
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
});

export default ChatRooms;
