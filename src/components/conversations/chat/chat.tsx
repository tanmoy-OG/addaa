import { useEffect, useRef } from "react";

import useGetMessages from "@/hooks/use-get-messages";
import useListenMessages from "@/hooks/use-listen-messages";
import MessageSkeleton from "components/skeletons/message-skeleton";

import EachChat from "./each-chat";

const Chat = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div
      className="size-full overflow-auto p-4"
      style={{ scrollbarGutter: "stable" }}
    >
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          <div key={message._id} ref={lastMessageRef}>
            <EachChat message={message} />
          </div>
        ))}

      {loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex size-full flex-col justify-center">
          <p className="text-center text-xl font-medium">
            Send a message to start{" "}
            <span className="font-semibold text-accent">Addaa!!</span> ☕
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
