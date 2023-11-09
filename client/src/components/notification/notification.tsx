import clsx from "clsx";
import { MessageType } from "../../types/request";
import "./notification.css";

export type NotifcationProps = {
  message: string;
  type?: MessageType;
};

export function Notification({ message, type }: NotifcationProps) {
  return <div className={clsx(type)}>{message}</div>;
}
