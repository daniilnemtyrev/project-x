import { classNames } from 'shared/lib/classNames'
import cls from './Avatar.module.scss'

interface Props {
    className?: string
    url?: string
    alt?: string
    size?: 'S' | 'M' | 'L'
}

export function Avatar({ className, url, alt = 'image', size = 'M' }: Props) {
    return (
        <div className={classNames(cls.Avatar, {}, [className])}>
            <img
                className={classNames(cls.image, {}, [cls[size]])}
                src={url}
                alt={alt}
            />
        </div>
    )
}
