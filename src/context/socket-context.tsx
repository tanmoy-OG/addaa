"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

import { useAuthContext } from "./auth-context";

interface SocketContextProviderProps {
  children: React.ReactNode;
}

const SocketContext = createContext({});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: SocketContextProviderProps) => {
  const [socket, setSocket]: any = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser }: any = useAuthContext();

  useEffect((): any => {
    if (authUser) {
      const socket = io("https://addaa-api.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
