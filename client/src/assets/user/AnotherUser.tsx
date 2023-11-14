import { Notification } from "../../components/notification/notification";
import { useUserSocket } from "../../hooks/useUserSocket";

export function AnotherUser() {
  const { notifications, simulateLogIn } = useUserSocket();
  simulateLogIn(5);

  return (
    <div className="container">
      <div className="card"> User ID: 5</div>
      {Array.isArray(notifications) ? (
        notifications.map(({ message, status }) => (
          <Notification key={message} message={message} type={status} />
        ))
      ) : (
        <p>No new notifications</p>
      )}
    </div>
  );
}
