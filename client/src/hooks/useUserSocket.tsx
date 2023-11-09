import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { MessageType } from "../types/request";

const socket = io.connect("http://localhost:3003");

export function useUserSocket() {
  const [notification, setNotification] = useState<{
    message: string;
    type: MessageType | undefined;
  }>({ message: "", type: undefined });

  useEffect(() => {
    socket.on("receive_message", ({ message, type }) => {
      setNotification({ message, type });
    });
  }, [socket]);

  const joinRoom = (room: number) => {
    socket.emit("join_room", room);
  };

  return { joinRoom, notification };
}
