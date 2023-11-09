import * as io from "socket.io-client";

import { MessageType } from "../types/request";

const socket = io.connect("http://localhost:3003");

export function useSocket() {
  const getMessage = (type: MessageType) =>
    type === "approve"
      ? "Your request was approved 🎉"
      : "Unfortunately your request was rejected 😭";

  const sendMessage = (room: number, type: MessageType) => {
    socket.emit("send_message", {
      message: getMessage(type),
      type: type,
      room,
    });
  };

  return { sendMessage };
}
