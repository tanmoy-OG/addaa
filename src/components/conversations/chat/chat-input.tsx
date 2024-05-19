import { useRef, useState } from "react";

import useAutosizeTextArea from "@/hooks/use-autosize-textarea";
import useSendMessage from "@/hooks/use-send-message";
import SendSvg from "@/icons/send-svg";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { loading, sendMessage } = useSendMessage();

  useAutosizeTextArea(textAreaRef.current, message);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target?.value;

    setMessage(val);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="form-control mt-auto px-4 pt-1" onSubmit={handleSubmit}>
      <div className="flex w-full gap-4">
        <textarea
          ref={textAreaRef}
          className="textarea w-full resize-none bg-neutral text-sm focus:outline-none"
          placeholder="Message"
          rows={1}
          style={{ scrollbarGutter: "stable" }}
          value={message}
          onChange={handleChange}
        ></textarea>
        <button className="group btn btn-accent size-10 min-h-0 self-end overflow-hidden p-2 hover:bg-info">
          {loading ? (
            <div className="loading loading-spinner text-info"></div>
          ) : (
            <SendSvg />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
