import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../libs/cn";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
}

export default function FormInput({ children, ...inputProps }: InputProps) {
  const { register } = useFormContext();
  return (
    <div className="relative">
      {children && <div className="absolute left-8px top-8px">{children}</div>}
      <input
        className={`bg-white border-b ${
          children ? "pl-8" : "pl-4"
        } h-8 w-full focus:bg--white focus:text-black`}
        {...inputProps}
        {...register(inputProps.name, {
          required: {
            value: true,
            message: `${inputProps.placeholder} is required`,
          },
        })}
      />
    </div>
  );
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
