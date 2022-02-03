import { useState } from "react";
import { ChatRoom } from "../../interfaces";
import { getChatRooms } from "../api/chat_rooms";

const useChatRooms = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const handleGetChatRooms = async () => {
    try {
      const res = await getChatRooms();

      if (res.status === 200) {
        setChatRooms(res.data.chatRooms);
      } else {
        console.log("No chat rooms");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return {
    loading,
    chatRooms,
    handleGetChatRooms,
  };
};

export default useChatRooms;
