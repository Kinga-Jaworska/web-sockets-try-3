import { MessageType } from "../types/request";

export type Notification = {
  message: string;
  status: MessageType | undefined;
};
