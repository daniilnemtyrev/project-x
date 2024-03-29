import { classNames } from 'shared/lib/classNames'

import type { PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkVariants {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariants
}

export function AppLink({
    to,
    className,
    children,
    variant = AppLinkVariants.PRIMARY,
    ...rest
}: PropsWithChildren<AppLinkProps>) {
    return (
        <Link
            {...rest}
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[variant]])}
        >
            {children}
        </Link>
    )
}
