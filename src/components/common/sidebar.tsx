import AddFriendSvg from "@/icons/add-friend-svg";
import BroadcastSvg from "@/icons/broadcast-svg";
import MessageSvg from "@/icons/message-svg";
import VideoCallSvg from "@/icons/video-call-svg";
import VoiceCallSvg from "@/icons/voice-call-svg";

import Settings from "./settings";

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col gap-2 sm:gap-4">
      <div className="flex flex-col gap-2 sm:gap-4">
        <button className="btn btn-disabled size-10 min-h-0 self-end p-2">
          <MessageSvg />
        </button>
        <button className="btn btn-disabled size-10 min-h-0 self-end p-2">
          <BroadcastSvg />
        </button>
        <button className="btn btn-disabled size-10 min-h-0 self-end p-2">
          <AddFriendSvg />
        </button>
        {/* <div className="divider"></div> */}
      </div>
      <div className="mt-auto flex flex-col gap-2 sm:gap-4">
        <button className="btn btn-disabled size-10 min-h-0 self-end p-2">
          <VideoCallSvg />
        </button>
        <button className="btn btn-disabled size-10 min-h-0 self-end p-2">
          <VoiceCallSvg />
        </button>
        <Settings />
      </div>
    </div>
  );
};

export default Sidebar;
