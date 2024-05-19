import { useEffect } from "react";

import useConversation from "@/global/use-conversation-zustand";

import Chat from "./chat";
import ChatInput from "./chat-input";
import ChatNav from "./chat-nav";
import NoChat from "./no-chat";

const ChatContainer = () => {
  const { selectedConversation, setSelectedConversation }: any =
    useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex size-full flex-col pb-4">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <ChatNav />
          <Chat />
          <ChatInput />
        </>
      )}
    </div>
  );
};

export default ChatContainer;
