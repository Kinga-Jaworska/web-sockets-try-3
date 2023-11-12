import { Card } from "../components/card/card";
import { ListPanel } from "../components/list-panel/list-panel";
import { useManagerSocket } from "../hooks/useManagerSocket";
import { REQUESTS } from "../mock/request";

export function Manager() {
  const { sendResponseToUser } = useManagerSocket();

  return (
    <Card>
      <ListPanel
        data={REQUESTS}
        onClick={(userID, type) => sendResponseToUser(userID, type)}
        isManager
      />
    </Card>
  );
}
