"use client";

import { useRouter } from "next/navigation";

import ChatContainer from "@/chat/chat-container";
import Sidebar from "@/common/sidebar";
import { useAuthContext } from "@/context/auth-context";
import Conversations from "@/conversations-list/conversations";

const Home = () => {
  const { authUser }: any = useAuthContext();
  const router = useRouter();
  if (!authUser) {
    router.push("/sign-in");
    return null;
  }
  return (
    <main className="absolute bottom-0 top-12 flex w-full items-start justify-between gap-2 bg-gradient-to-r from-primary to-secondary px-2 pb-2 backdrop-blur-sm sm:gap-4 sm:px-4 sm:pb-4 lg:gap-6 lg:px-6 lg:pb-6">
      <Sidebar />
      <div className="flex size-full rounded-box bg-base-100 shadow-xl contain-content">
        <Conversations />
        <ChatContainer />
      </div>
    </main>
  );
};

export default Home;
