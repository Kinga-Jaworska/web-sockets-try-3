import { ReactNode } from "react";
import "./card.css";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
