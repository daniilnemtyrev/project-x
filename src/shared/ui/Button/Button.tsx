import { classNames } from 'shared/lib/classNames'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonVariants {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariants
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
            type="button"
            className={classNames(cls.button, {}, [className, cls[variant]])}
        >
            {children}
        </button>
    )
}
