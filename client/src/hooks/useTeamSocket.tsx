import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import { Room } from "../types/team";

type UseTeamSocketProps = {
  teamName: string;
};

type Notification = {
  message: string;
  isRecived?: boolean;
};

export function useTeamSocket({ teamName }: UseTeamSocketProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [room, setRoom] = useState<Room>();

  const socket = io.connect(`http://localhost:3003/${teamName}`);

  const handleNotification = ({ message }: Notification) => {
    // console.log("handleNotification", notification.message, notification.isRecived);
    setNotifications((prev) => [...prev, { message }]);
  };

  const sendRoomNotification = (room: Room, message: string) => {
    // send Room Message
    socket.emit("roomMessage", { room, message });
  };

  useEffect(() => {
    if (!socket.hasListeners("namespaceNotification")) {
      socket.on("namespaceNotification", ({ message }) => alert(message));
    }

    if (!socket.hasListeners("roomMessage")) {
      // get Room Message
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

    // if (room === "be") sendRoomNotification(room, "Hello Backend Room!");
    // else sendRoomNotification(room, "Hello Frontend Room!");
  };

  const leftRoom = () => {}; // ?

  return { notifications, room, joinRoom, sendRoomNotification };
}
