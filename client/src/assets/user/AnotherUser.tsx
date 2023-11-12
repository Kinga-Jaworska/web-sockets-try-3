import { Notification } from "../../components/notification/notification";
import { useUserSocket } from "../../hooks/useUserSocket";

export function AnotherUser() {
  const { notification, simulateLogIn } = useUserSocket();

  simulateLogIn(5);

  return (
    <div className="container">
      User room 5
      <Notification
        message={notification?.message}
        type={notification.status}
      />
    </div>
  );
}
