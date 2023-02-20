import { classNames } from 'shared/lib/classNames'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonVariants {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
}

export function Button({
    variant = ButtonVariants.CLEAR,
    children,
    ...rest
}: PropsWithChildren<ButtonProps>) {
    return (
        <button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            type="button"
            className={classNames(cls.button, {}, [cls[variant]])}
        >
            {children}
        </button>
    )
}
