import { Card } from "../components/card/card";
import { ListPanel } from "../components/list-panel/list-panel";
import { useSocket } from "../hooks/useSocket";
import { REQUESTS } from "../mock/request";

export function Manager() {
  const { sendMessage } = useSocket();

  return (
    <Card>
      <ListPanel
        data={REQUESTS}
        onClick={(userID, type) => sendMessage(userID, type)}
        isManager
      />
    </Card>
  );
}
