import { classNames } from 'shared/lib/classNames'
import cls from './Text.module.scss'

export enum TextVariants {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    title?: string
    text?: string
    variant?: TextVariants
}

export function Text({
    title,
    text,
    variant = TextVariants.PRIMARY,
}: TextProps) {
    return (
        <div className={classNames(cls.container, {}, [cls[variant]])}>
            {title && <span className={cls.title}>{title}</span>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
