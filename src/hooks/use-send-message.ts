import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "@/context/auth-context";
import useConversation from "@/global/use-conversation-zustand";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { authUser }: any = useAuthContext();
  const { messages, setMessages, selectedConversation }: any =
    useConversation();

  const sendMessage = async (message: string) => {
    const bodyData = {
      message,
      name: authUser.name,
    };
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        },
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default useSendMessage;
