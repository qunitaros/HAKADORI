import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import { ChatRoom } from "../../interfaces/index";
import useChatRooms from "../../lib/hooks/useChatRooms";

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
  chatRoom: {
    padding: theme.spacing(1),
  },
}));

//チャットルーム一覧ページ
const ChatRooms: React.FC = () => {
  const classes = useStyles();

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
                  <Link
                    to={`/chat_room/${chatRoom.chatRoom.id}`}
                    className={classes.link}
                  >
                    <span className={classes.root}>
                      <ListItem
                        alignItems="flex-start"
                        className={classes.chatRoom}
                      >
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
                      </ListItem>
                    </span>
                  </Link>
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
        <></>
      )}
    </>
  );
};

export default ChatRooms;
