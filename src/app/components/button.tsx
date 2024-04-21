import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/libs/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "submit" | "button";
  buttonStyle: "primary" | "secondary";
  buttonSize: "small" | "large";
  isDisabled?: boolean;
  children: ReactNode;
}

export function BaseButton(props: ButtonProps) {
  const { buttonType, buttonStyle, buttonSize, children, isDisabled, onClick } =
    props;
  const baseClass = "text-white bg-primary hover:underline text-base h-10";
  const sizeClass = buttonSize === "small" ? "w-40" : "w-full";
  const typeClass =
    buttonStyle === "secondary"
      ? "bg-white border border-primary text-primary hover:bg-white hover:border-primary"
      : "";
  const disableClass = isDisabled
    ? `${
        buttonStyle === "primary"
          ? "disabled:bg-primary/50 hover:no-underline"
          : "disabled:bg-black/15 hover:no-underline"
      }`
    : "";
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={cn(baseClass, sizeClass, typeClass, disableClass)}
      disabled={isDisabled}>
      {children}
    </button>
  );
}
