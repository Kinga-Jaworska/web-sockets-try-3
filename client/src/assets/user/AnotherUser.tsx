import * as io from "socket.io-client";
import { Notification } from "../../components/notification/notification";
import { useUserSocket } from "../../hooks/useUserSocket";

const socket = io.connect("http://localhost:3003");

export function AnotherUser() {
  const { notification, joinRoom } = useUserSocket();

  joinRoom(5);

  return (
    <div className="container">
      User room 5
      <Notification message={notification?.message} type={notification.type} />
    </div>
  );
}
