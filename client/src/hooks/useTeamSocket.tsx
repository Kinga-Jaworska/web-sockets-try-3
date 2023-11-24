import { useEffect } from "react";
import * as io from "socket.io-client";
import { Notification } from "../mock/notification";

type UseTeamSocketProps = {
  teamName: string;
};

export function useTeamSocket({ teamName }: UseTeamSocketProps) {
  const socket = io.connect(`http://localhost:3003/${teamName}`); // ENV

  const handleNotification = (notification: Notification) => {
    alert(notification.message);
  };

  useEffect(() => {
    if (!socket.hasListeners("namespaceNotification")) {
      socket.on("namespaceNotification", handleNotification);
    }

    return () => {
      // Cleanup function to remove the event listener
      socket.off("namespaceNotification", handleNotification);
      // socket.disconnect();
    };
  }, [teamName]);

  // return {};
}
