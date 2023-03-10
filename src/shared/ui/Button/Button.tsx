import { classNames } from 'shared/lib/classNames'
import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonVariants {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    FUTURE = 'future',
    BACKGROUND = 'background',
    BACKGROUND_INVERT = 'background_invert',
}

export enum ButtonSizes {
    S = 'small',
    M = 'medium',
    L = 'large',
    FULL = 'full',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    size?: ButtonSizes
    square?: boolean
}

export const Button = memo(
    ({
        variant = ButtonVariants.CLEAR,
        size = ButtonSizes.M,
        square = true,
        children,
        ...rest
    }: PropsWithChildren<ButtonProps>) => (
        <button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            type="button"
            className={classNames(cls.button, { [cls.square]: square }, [
                cls[variant],
                cls[size],
            ])}
        >
            {children}
        </button>
    )
)
