import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { MessageType } from "../types/request";

const socket = io.connect("http://localhost:3003");

// type UseUserSocketProps = {
//   userID: number;
// };

export function useUserSocket() {
  const [notifications, setNotifications] = useState<
    {
      message: string;
      status: MessageType | undefined;
    }[]
  >([{ message: "", status: undefined }]);

  const simulateLogIn = (userID: number) => {
    socket.emit("login", userID);
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    if (!socket.hasListeners("notification")) {
      socket.on("notification", (notification) => {
        setNotifications((prev) => [...prev, notification]);
      });
    }

    return () => {
      if (!socket.hasListeners("notification")) {
        socket.disconnect();
      }
    };
  }, []);

  return { notifications, simulateLogIn };
}
