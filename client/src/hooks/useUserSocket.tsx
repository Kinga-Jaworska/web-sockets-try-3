import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { MessageType } from "../types/request";

const socket = io.connect("http://localhost:3003");

export function useUserSocket() {
  const [notification, setNotification] = useState<{
    message: string;
    status: MessageType | undefined;
  }>({ message: "", status: undefined });

  useEffect(() => {
    socket.connect();

    socket.on("notification", (notification) => {
      setNotification(notification);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const simulateLogIn = (userID: number) => {
    socket.emit("login", userID);
  };

  return { notification, simulateLogIn };
}
