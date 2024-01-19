import { CustomButton } from "../../components/custom-button/custom-button";
import { useTeamSocket } from "../../hooks/useTeamSocket";

export function CouchbaseTeam() {
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
          <input />
          <CustomButton onClick={() => sendRoomNotification(room, "Hello ")}>
            Send notification
          </CustomButton>

          {notifications.map((message) => (
            <p>Message {message} </p>
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
