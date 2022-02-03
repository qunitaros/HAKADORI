import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { Message } from "../../interfaces/index";
import useChatRoom from "../../lib/hooks/useChatRoom";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    mergin: "0 auto",
  },
  formWrapper: {
    marginTop: "50px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: "380px",
  },
  textInputWrapper: {
    width: "100%",
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

type ChatRoomProps = RouteComponentProps<{ id: string }>;

// 個別のチャットルームページ
const ChatRoom: React.FC<ChatRoomProps> = (props) => {
  const classes = useStyles();
  const {
    loading,
    otherUser,
    messages,
    content,
    setContent,
    handleGetChatRoom,
    handleSubmit,
    iso8601ToDateTime,
  } = useChatRoom(props);

  useEffect(() => {
    handleGetChatRoom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        <div style={{ maxWidth: "720px" }}>
          <Grid
            container
            justifyContent="center"
            style={{ marginBottom: "1rem" }}
          >
            <Grid item>
              <Avatar
                alt="avatar"
                src={otherUser?.image.url || ""}
                className={classes.avatar}
              />
              <Typography
                variant="body2"
                component="p"
                gutterBottom
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {otherUser?.name}
              </Typography>
            </Grid>
          </Grid>
          {messages.map((message: Message, index: number) => {
            return (
              <Grid
                key={index}
                container
                justifyContent={
                  message.userId === otherUser?.id ? "flex-start" : "flex-end"
                }
              >
                <Grid item>
                  <Box
                    borderRadius={
                      message.userId === otherUser?.id
                        ? "30px 30px 30px 0px"
                        : "30px 30px 0px 30px"
                    }
                    bgcolor={
                      message.userId === otherUser?.id ? "#000000" : "#ffb6c1"
                    }
                    color={
                      message.userId === otherUser?.id ? "#000000" : "#ffffff"
                    }
                    m={1}
                    border={10}
                    style={{ padding: "1rem 0.5rem 1rem 1rem" }}
                  >
                    <Typography variant="body1" component="p">
                      {message.content}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{
                      textAlign:
                        message.userId === otherUser?.id ? "left" : "right",
                    }}
                  >
                    {iso8601ToDateTime(
                      message.createdAt?.toString() || "100000000"
                    )}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
          <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
            <form className={classes.formWrapper} noValidate autoComplete="off">
              <TextField
                required
                multiline
                value={content}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContent(e.target.value)
                }
                className={classes.textInputWrapper}
              />
              <Button
                variant="contained"
                color="primary"
                disabled={!content ? true : false}
                onClick={handleSubmit}
                className={classes.button}
              >
                <SendIcon />
              </Button>
            </form>
          </Grid>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChatRoom;
