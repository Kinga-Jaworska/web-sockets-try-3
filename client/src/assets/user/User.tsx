import { Notification } from "../../components/notification/notification";
import { useUserSocket } from "../../hooks/useUserSocket";

export function User() {
  const { notification, simulateLogIn } = useUserSocket();

  simulateLogIn(12);

  return (
    <div className="container">
      <div className="card"> User room 12</div>
      <Notification
        message={notification?.message}
        type={notification.status}
      />
    </div>
  );
}
