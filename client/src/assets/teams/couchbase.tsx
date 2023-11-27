import { CustomButton } from "../../components/custom-button/custom-button";
import { useTeamSocket } from "../../hooks/useTeamSocket";

export function CouchbaseTeam() {
  const { notifications, joinRoom } = useTeamSocket({ teamName: "couchbase" });

  return (
    <div className="container">
      <div className="card">Couchbase Team</div>
      ROOMS:
      <CustomButton onClick={() => joinRoom("be")}>BE</CustomButton>
      <CustomButton onClick={() => joinRoom("fe")}>FE</CustomButton>
      {notifications.map((message) => (
        <p>Message {message} </p>
      ))}
    </div>
  );
}
