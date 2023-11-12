import { useEffect } from "react";
import * as io from "socket.io-client";
import { MessageType } from "../types/request";

const socket = io.connect("http://localhost:3003"); // ENV

export function useManagerSocket() {
  const getMessage = (type: MessageType) =>
    type === "approve"
      ? "Your request was approved 🎉"
      : "Unfortunately your request was rejected 😭";

  useEffect(() => {
    socket.connect();
    socket.emit("login", 9);

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendResponseToUser = (userID: number, type: MessageType) => {
    socket.emit("approveOrReject", {
      userId: userID,
      message: getMessage(type),
    });
  };

  return { sendResponseToUser };
}
