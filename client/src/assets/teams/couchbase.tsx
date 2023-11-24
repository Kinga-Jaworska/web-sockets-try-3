import { useTeamSocket } from "../../hooks/useTeamSocket";

export function CouchbaseTeam() {
  useTeamSocket({ teamName: "couchbase" });

  return (
    <div className="container">
      <div className="card">Couchbase Team</div>
      ROOMS:
      <div>FE</div>
      <div>BE</div>
    </div>
  );
}
