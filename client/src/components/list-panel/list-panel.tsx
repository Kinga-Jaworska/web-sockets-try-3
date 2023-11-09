import * as io from "socket.io-client";

import { ReactNode } from "react";
import { MessageType, Request } from "../../types/request";
import { CustomButton } from "../custom-button/custom-button";
import approveIcon from "./../../assets/approve.svg";
import rejectIcon from "./../../assets/reject.svg";

const socket = io.connect("http://localhost:3003");
// const socket = io.connect(`${process.env.BASE_URL}`);

type ListPanelProps = {
  data: Request[];
  isManager: boolean;
  children?: ReactNode;
  onClick: (userID: number, type: MessageType) => void;
};

export function ListPanel({ data, isManager, onClick }: ListPanelProps) {
  return (
    <ul>
      {data.map(({ id, title, userID }) => (
        <li key={id} className="panel">
          <div>User ID {userID}</div>
          {title}
          {isManager && (
            <>
              <CustomButton
                icon={approveIcon}
                onClick={() => onClick(userID, "approve")}
              />
              <CustomButton
                icon={rejectIcon}
                onClick={() => onClick(userID, "reject")}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
