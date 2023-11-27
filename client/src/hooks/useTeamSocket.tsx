import { useEffect, useState } from "react";
import * as io from "socket.io-client";

type UseTeamSocketProps = {
  teamName: string;
};

export function useTeamSocket({ teamName }: UseTeamSocketProps) {
  const [notifications, setNotifications] = useState<string[]>([]);

  const socket = io.connect(`http://localhost:3003/${teamName}`);

  const handleNotification = (message: string) => {
    setNotifications((prev) => [...prev, message]);
  };

  useEffect(() => {
    // if (!socket.hasListeners("namespaceNotification")) {
    //   // socket.on("namespaceNotification", handleNotification);
    // }
    socket.on("roomMessage", handleNotification);

    // if (!socket.hasListeners("roomMessage")) {
    // socket.on("roomMessage", handleNotification);
    // socket.emit("roomMessage", { room: "be", message: "Hello Backend Room!" });

    // Send a message to the room
    // }

    return () => {
      socket.off("namespaceNotification", handleNotification);
    };
  }, [teamName]);

  const joinRoom = (room: string) => {
    socket.emit("joinRoom", room);
    socket.emit("roomMessage", { room, message: "Hello Backend Room!" });
    // socket.emit("joinRoom", "be"); // Room name can be dynamic or based on user roles
  };

  return { notifications, joinRoom };
}
