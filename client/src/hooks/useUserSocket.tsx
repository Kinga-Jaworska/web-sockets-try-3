import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { Notification } from "../mock/notification";

const socket = io.connect("http://localhost:3003");

type UseUserSocketProps = {
  userID: number;
};

export function useUserSocket({ userID }: UseUserSocketProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const simulateLogIn = () => {
    socket.emit("login", userID);
  };

  const handleNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    if (!socket.hasListeners("notification")) {
      socket.on("notification", handleNotification);
    }

    simulateLogIn();

    return () => {
      if (socket.hasListeners("notification")) {
        socket.off("notification", handleNotification);
      }
      socket.disconnect();
    };
  }, [userID]);

  return { notifications };
}
