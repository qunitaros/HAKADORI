import React, { useContext, useState } from "react";

import { AuthContext } from "../../App";
import { Message, User } from "../../interfaces";
import { getChatRoom } from "../api/chat_rooms";
import { createMessage } from "../api/messages";

const useChatRoom = (props) => {
  const { currentUser } = useContext(AuthContext);
  const id = parseInt(props.match.params.id);

  const [loading, setLoading] = useState<boolean>(true);
  const [otherUser, setOtherUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState<string>("");

  const handleGetChatRoom = async () => {
    try {
      const res = await getChatRoom(id);
      console.log(res);

      if (res?.status === 200) {
        setOtherUser(res?.data.otherUser);
        setMessages(res?.data.messages);
      } else {
        console.log("No other user");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: Message = {
      chatRoomId: id,
      userId: currentUser?.id,
      content: content,
    };

    try {
      const res = await createMessage(data);
      console.log(res);

      if (res.status === 200) {
        setMessages([...messages, res.data.message]);
        setContent("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Railsから渡ってくるtimestamp(ISO8601)をdatetimeに変換
  const iso8601ToDateTime = (iso8601: string) => {
    const date = new Date(Date.parse(iso8601));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return (
      year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分"
    );
  };

  return {
    loading,
    otherUser,
    messages,
    content,
    setContent,
    handleGetChatRoom,
    handleSubmit,
    iso8601ToDateTime,
  };
};

export default useChatRoom;
