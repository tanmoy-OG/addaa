import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";
import ThreeDotSvg from "@/icons/three-dot-svg";

const ChatNav = () => {
  const { selectedConversation }: any = useConversation();
  const { onlineUsers }: any = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="navbar z-10 flex justify-between pl-10 shadow hover:cursor-default">
      <div className="gap-4">
        <h1 className="text-center text-lg font-medium">
          {selectedConversation.name}
        </h1>
        <p
          className={`badge badge-outline text-xs ${isOnline ? "badge-success" : "badge-error"}`}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost size-10 min-h-0 p-2 transition-all hover:scale-110 hover:bg-base-100 active:bg-info active:transition-all">
          <ThreeDotSvg />
        </summary>
        <ul className="menu dropdown-content z-[1] w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
          <li>
            <button className="btn btn-disabled">View Contact</button>
          </li>
          <li>
            <button className="btn btn-disabled">Mute</button>
          </li>
          <li>
            <button className="btn btn-disabled">Pin</button>
          </li>
          <li>
            <button className="btn btn-disabled">Clear Chat</button>
          </li>
          <li>
            <button className="btn btn-disabled">Remove Friend</button>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default ChatNav;
