import clsx from "clsx";
import { ReactNode } from "react";
import "./custom-button.css";

type CustomButtonProps = {
  icon?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function CustomButton({
  icon,
  children,
  onClick,
  type = "button",
}: CustomButtonProps) {
  return (
    <button
      type={type}
      className={clsx(icon && "transparent-button")}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="approve-icon" height={30} width={30} />}
      {children}
    </button>
  );
}
