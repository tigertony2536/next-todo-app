"use client";

import React, { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import { cn } from "../libs/cn";
import { useFormContext, RegisterOptions, FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { DevTool } from "@hookform/devtools";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string;
  options?: RegisterOptions<FieldValues, "name"> | undefined;
  name: string;
  icon?: ReactNode;
}

export const FormField: React.FC<InputProps> = ({
  ...inputProps
}: InputProps) => {
  const methods = useFormContext();
  const { type, placeholder, value, options, icon, name } = inputProps;
  const {
    control,
    register,
    formState: { errors },
  } = methods;
  return (
    <div className="relative w-full">
      {icon && <div className="absolute left-2 top-2">{inputProps.icon}</div>}
      <input
        className={`bg-white border-b ${
          icon ? "pl-8" : "pl-4"
        } h-8 w-full focus:bg-white focus:text-black mb-2`}
        type={type}
        placeholder={placeholder}
        value={value}
        {...register(name, options)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages && (
            <p
              className="text-red-500 text-paragraph-small"
              key={type}>
              {Object.values(messages)[0]}
            </p>
          )
        }
      />
      {/* <DevTool control={control}></DevTool> */}
    </div>
  );
};
