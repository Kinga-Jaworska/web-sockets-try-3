import { useState } from "react";
import { CustomButton } from "../../components/custom-button/custom-button";
import { useTeamSocket } from "../../hooks/useTeamSocket";
import "./teams.css";
import clsx from "clsx";

export function CouchbaseTeam() {
  const [message, setMessage] = useState("");

  const { notifications, room, joinRoom, sendRoomNotification } = useTeamSocket(
    {
      teamName: "couchbase",
    }
  );

  return (
    <div className="container">
      <div className="card">Couchbase Team</div>
      ROOMS:
      {room ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendRoomNotification(room, message);
            }}
            className="message-form"
          >
            <input
              className="custom-input"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <CustomButton type="submit">Send notification</CustomButton>
          </form>

          {notifications.map(({ message: notification, isRecived }, index) => (
            <p
              key={`${notification}_${index}`}
              className={clsx(isRecived ? "recived" : "sended", "message")}
            >
              {notification}
            </p>
          ))}
        </>
      ) : (
        <>
          <CustomButton onClick={() => joinRoom("be")}>BE</CustomButton>
          <CustomButton onClick={() => joinRoom("fe")}>FE</CustomButton>
        </>
      )}
    </div>
  );
}
