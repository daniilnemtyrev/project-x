import { classNames } from 'shared/lib/classNames'
import cls from './Text.module.scss'

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

export enum TextVariants {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string

    title?: string
    text?: string
    variant?: TextVariants
    align?: TextAlign
    size?: TextSize
}

export function Text({
    className,
    title,
    text,
    variant = TextVariants.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) {
    return (
        <div
            className={classNames(cls.container, {}, [
                cls[variant],
                cls[align],
                cls[size],
                className,
            ])}
        >
            {title && <span className={cls.title}>{title}</span>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
