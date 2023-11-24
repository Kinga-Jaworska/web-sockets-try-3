import { Notification } from "../../components/notification/notification";
import { useUserSocket } from "../../hooks/useUserSocket";

export function User() {
  const { notifications } = useUserSocket({ userID: 12 });

  return (
    <div className="container">
      <div className="card"> User ID: 12</div>

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
