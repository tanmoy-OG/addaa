import { useState } from "react";

import useGetConversations from "@/hooks/use-get-conversation";

import Conversation from "./conversation";
import MyProfileInfo from "./my-profile-info";
import Search from "./search";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-full w-1/3 flex-col gap-4 bg-neutral p-4 pr-0">
      <MyProfileInfo />
      <Search setSearch={setSearch} />
      <div
        className="flex h-full flex-col gap-2 overflow-y-auto pr-2 sm:gap-4"
        style={{ scrollbarGutter: "stable" }}
      >
        {conversations
          .filter((conversation: any) => {
            return search.toLowerCase() === ""
              ? conversation
              : conversation.name.toLowerCase().includes(search) ||
                  conversation.username.toLowerCase().includes(search);
          })
          .map((conversation: any) => (
            <Conversation key={conversation._id} conversation={conversation} />
          ))}

        {loading ? (
          <span className="loading loading-spinner m-auto text-secondary"></span>
        ) : null}
      </div>
    </div>
  );
};

export default Conversations;
