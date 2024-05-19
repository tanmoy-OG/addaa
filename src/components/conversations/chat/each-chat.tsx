import { useAuthContext } from "@/context/auth-context";
import { extractTime } from "@/utils/extract-time";

const EachChat = ({ message }: any) => {
  const { authUser }: any = useAuthContext();
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatPos = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "chat-bubble-warning" : "chat-bubble-neutral";
  const shake = message.shake ? "shake" : "";

  return (
    <div className={`chat  ${chatPos}`}>
      <div className="chat-header"></div>
      <div
        className={`chat-bubble rounded-btn text-sm transition-all ${bubbleBgColor} ${shake}`}
      >
        {message.message}
        <time className="flex flex-col items-end text-xs opacity-50">
          {formattedTime}
        </time>
      </div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  );
};

export default EachChat;
