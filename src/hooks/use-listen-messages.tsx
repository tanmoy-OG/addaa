import { useEffect } from "react";
import toast from "react-hot-toast";

import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";
import notificationSound from "@/sounds/notification-sound.mp3";

const useListenMessages = () => {
  const { socket }: any = useSocketContext();
  const { selectedConversation, messages, setMessages }: any =
    useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      newMessage.shake = true;
      const audio = new Audio(notificationSound);
      audio.play();

      if (newMessage.senderId === selectedConversation?._id) {
        setMessages([...messages, newMessage]);
      } else {
        toast(
          () => (
            <div className="">
              <h1 className="mb-2 font-medium">{newMessage.name}</h1>
              <p className="text-sm">{newMessage.message}</p>
            </div>
          ),
          {
            icon: "☕",
          },
        );
      }
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
