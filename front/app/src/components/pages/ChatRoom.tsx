import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ChatRoomUserName from "../atoms/titles/ChatRoomUserName";
import { Message } from "../../interfaces/index";
import useChatRoom from "../../lib/hooks/useChatRoom";
import MessageContent from "../atoms/contents/MessageContent";
import MessageTime from "../atoms/contents/MessageTime";
import MessageForm from "../atoms/forms/MessageForm";
import MessageButton from "../atoms/buttons/MessageButton";
import LargeAvatar from "../atoms/avatars/LargeAvatar";

const StyledWrapper = styled("form")(() => ({
  marginTop: "50px",
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  maxWidth: "380px",
}));

type ChatRoomProps = RouteComponentProps<{ id: string }>;

// 個別のチャットルームページ
const ChatRoom: React.FC<ChatRoomProps> = React.memo((props) => {
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
              <LargeAvatar imageUrl={otherUser?.image.url || ""} />

              <ChatRoomUserName>{otherUser?.name}</ChatRoomUserName>
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
                  <MessageContent
                    messageUserId={message.userId}
                    otherUserId={otherUser?.id}
                  >
                    {message.content}
                  </MessageContent>
                  <MessageTime
                    messageUserId={message.userId}
                    otherUserId={otherUser?.id}
                  >
                    {iso8601ToDateTime(
                      message.createdAt?.toString() || "100000000"
                    )}
                  </MessageTime>
                </Grid>
              </Grid>
            );
          })}
          <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
            <StyledWrapper noValidate autoComplete="off">
              <MessageForm
                value={content}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContent(e.target.value)
                }
              />
              <MessageButton
                disabled={!content ? true : false}
                onClick={handleSubmit}
              />
            </StyledWrapper>
          </Grid>
        </div>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
});

export default ChatRoom;
