import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { Room } from "../types/team";

type UseTeamSocketProps = {
  teamName: string;
};

export function useTeamSocket({ teamName }: UseTeamSocketProps) {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [room, setRoom] = useState<Room>();

  const socket = io.connect(`http://localhost:3003/${teamName}`);

  const handleNotification = (message: string) => {
    setNotifications((prev) => [...prev, message]);
  };

  const sendRoomNotification = (room: Room, message: string) => {
    socket.emit("roomMessage", { room, message });
  };

  useEffect(() => {
    if (!socket.hasListeners("namespaceNotification")) {
      socket.on("namespaceNotification", ({ message }) => alert(message));
    }

    if (!socket.hasListeners("roomMessage")) {
      socket.on("roomMessage", handleNotification);
    }

    return () => {
      socket.off("namespaceNotification", handleNotification);
    };
  }, [teamName]);

  const joinRoom = (room: Room) => {
    // join room
    socket.emit("joinRoom", room);
    setRoom(room);

    // emit event to other users in room
    // make it by input - little chat
    // to testing purposes:
    if (room === "be") sendRoomNotification(room, "Hello Backend Room!");
    else sendRoomNotification(room, "Hello Frontend Room!");
  };

  const leftRoom = () => {}; // ?

  return { notifications, room, joinRoom, sendRoomNotification };
}
