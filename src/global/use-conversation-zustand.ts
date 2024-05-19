import { create } from "zustand";

interface useConversationState {
  selectedConversation: any;
  setSelectedConversation: (selectedConversation: any) => void;
  messages: any[];
  setMessages: (messages: any[]) => void;
}

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: useConversationState) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: useConversationState) => set({ messages }),
}));

export default useConversation;
