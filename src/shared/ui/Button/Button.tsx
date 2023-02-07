import { classNames } from "shared/lib";
import cls from "./Button.module.scss";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export enum ButtonVariants {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}

export function Button({
  className,
  variant = ButtonVariants.CLEAR,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...rest}
      className={classNames(cls.button, {}, [className, cls[variant]])}
    >
      {children}
    </button>
  );
}
