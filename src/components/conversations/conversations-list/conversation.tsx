import Image from "next/image";

import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";

const Conversation = ({ conversation }: any) => {
  const { selectedConversation, setSelectedConversation }: any =
    useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers }: any = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div
      className={`card card-side w-full rounded-btn transition-all hover:-translate-y-2 hover:cursor-pointer hover:shadow-lg ${isSelected ? "card-bordered border-accent bg-info    " : "bg-base-100"}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <figure className="h-20">
        <div
          className={`avatar size-12 sm:m-2 lg:m-4 ${isOnline ? "online" : "offline"}`}
        >
          <div className="rounded-full">
            <Image
              alt="avatar"
              height={48}
              src={conversation.profilePic}
              width={48}
            />
          </div>
        </div>
      </figure>
      <div className="card-body h-20 w-1/2 gap-0 text-wrap px-0 py-4 md:pr-2 lg:p-4 lg:pl-0">
        <h2 className="card-title text-wrap text-sm font-medium">
          {conversation.name}
        </h2>
        <p className="text-xs text-secondary">@{conversation.username}</p>
        <p className="text-xs"></p>
      </div>
    </div>
  );
};

export default Conversation;
