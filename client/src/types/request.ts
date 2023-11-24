export type Request = {
  id: number;
  title: string;
  userID: number;
};

export type MessageType = "reject" | "approve" | "info";
