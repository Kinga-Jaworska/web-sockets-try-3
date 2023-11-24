import { useTeamSocket } from "../../hooks/useTeamSocket";

export function LearnCodingAcademyTeam() {
  useTeamSocket({ teamName: "learnCodingAcademy" });

  return (
    <div className="container">
      <div className="card">Learn Coding Academy</div>
    </div>
  );
}
