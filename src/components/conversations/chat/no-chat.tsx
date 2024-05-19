import { useAuthContext } from "@/context/auth-context";
import useListenMessages from "@/hooks/use-listen-messages";
import EmptyMessageSvg from "@/icons/empty-message-svg";

const NoChat = () => {
  const { authUser }: any = useAuthContext();
  useListenMessages();

  return (
    <div className="flex size-full flex-col justify-center gap-6">
      <EmptyMessageSvg />
      <div className="">
        <h1 className="text-center text-xl font-medium">
          Yo {authUser.name} 👋🏽
        </h1>
        <h1 className="text-center text-xl font-medium">
          Select a contact to start{" "}
          <span className="font-semibold text-accent">Addaa!!</span> ☕
        </h1>
      </div>
    </div>
  );
};

export default NoChat;
