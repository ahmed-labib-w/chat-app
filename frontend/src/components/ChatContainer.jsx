import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

const ChatContainer = () => {
  const { messages, getMesgaes, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {}, []);

  if (isMessagesLoading) return <div>Loading . . .</div>;

  return <div>ChatContainer</div>;
};

export default ChatContainer;
