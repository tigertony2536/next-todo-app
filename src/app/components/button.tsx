"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/libs/cn";

interface buttonStyle extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: "primary" | "secondary";
  buttonSize: "small" | "large";
  text: string;
}

export function BaseButton({
  type = "submit",
  buttonStyle,
  buttonSize,
  text,
  disabled = false,
  className,
}: buttonStyle) {
  const baseClass = "text-white bg-primary hover:underline text-base h-10";
  const sizeClass = buttonSize === "small" ? "w-40" : "w-full";
  const typeClass =
    buttonStyle === "secondary"
      ? "bg-white border border-primary text-primary hover:bg-white hover:border-primary"
      : "";
  const disableClass = disabled
    ? `${
        buttonStyle === "primary"
          ? "disabled:bg-primary/50 hover:no-underline"
          : "disabled:bg-black/15 hover:no-underline"
      }`
    : "";
  return (
    <button
      type={type}
      className={cn(baseClass, sizeClass, typeClass, disableClass, className)}
      disabled={disabled}>
      {text}
    </button>
  );
}
