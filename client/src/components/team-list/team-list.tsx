import { Team } from "../../types/team";
import { CustomButton } from "../custom-button/custom-button";
import sendIcon from "./../../assets/send.svg";
import "./team-list.css";

type ListPanelProps = {
  data: Team[];
  onClick: (name: string) => void;
};

export function TeamList({ data, onClick }: ListPanelProps) {
  return (
    <div className="team-panel">
      Send notification to all in beloved team:
      <ul className="team-group">
        {data.map(({ id, name, userIdsList }) => (
          <li key={id} className="panel">
            <div>{name}</div>
            UserIDs:
            <div>{userIdsList.map((id) => id).join(", ")}</div>
            <CustomButton
              onClick={() => onClick(name)}
              icon={sendIcon}
              variant="primary"
            >
              Send notification to all team members
            </CustomButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
